#!/bin/sh
# start-cli installer for StartOS development
# Downloads and installs start-cli from official GitHub releases

set -e
set -u
# set -x

# Colors for better visual appeal (safe fallbacks)
if command -v tput >/dev/null 2>&1; then
    BOLD=$(tput bold 2>/dev/null || echo '')
    BLUE=$(tput setaf 4 2>/dev/null || echo '')
    GREEN=$(tput setaf 2 2>/dev/null || echo '')
    YELLOW=$(tput setaf 3 2>/dev/null || echo '')
    RED=$(tput setaf 1 2>/dev/null || echo '')
    WHITE=$(tput setaf 7 2>/dev/null || echo '')
    RESET=$(tput sgr0 2>/dev/null || echo '')
    DIM=$(tput dim 2>/dev/null || echo '')
else
    BOLD='' BLUE='' GREEN='' YELLOW='' RED='' WHITE='' RESET='' DIM=''
fi

# ASCII Header - Clean and properly centered
printf "\n"
printf "%s┌───────────────────────────────────────────────────────────────┐%s\n" "$DIM$RED" "$RESET"
printf "%s│%s                                                               %s│%s\n" "$DIM$RED" "$RESET" "$DIM$RED" "$RESET"
printf "%s│%s                           %sstart-cli%s                           %s│%s\n" "$DIM$RED" "$RESET" "$WHITE$BOLD" "$RESET" "$DIM$RED" "$RESET"
printf "%s│%s                                                               %s│%s\n" "$DIM$RED" "$RESET" "$DIM$RED" "$RESET"
printf "%s│%s                %sStartOS Command Line Interface%s                 %s│%s\n" "$DIM$RED" "$RESET" "$DIM" "$RESET" "$DIM$RED" "$RESET"
printf "%s│%s              %sOfficial tool for .s9pk development%s              %s│%s\n" "$DIM$RED" "$RESET" "$DIM" "$RESET" "$DIM$RED" "$RESET"
printf "%s│%s                                                               %s│%s\n" "$DIM$RED" "$RESET" "$DIM$RED" "$RESET"
printf "%s└───────────────────────────────────────────────────────────────┘%s\n" "$DIM$RED" "$RESET"
printf "\n"

# Detect platform
OS=$(uname -s)
ARCH=$(uname -m)

# Map to start-os release asset naming convention
case "$OS" in
    Darwin)
        OS_NAME="macos"
        DISPLAY_OS="macOS"
        ;;
    Linux)
        OS_NAME="linux"
        DISPLAY_OS="Linux"
        ;;
    *)
        printf "%sError:%s Unsupported operating system: %s\n" "$RED$BOLD" "$RESET" "$OS"
        printf "       start-cli supports macOS and Linux only\n"
        exit 1
        ;;
esac

case "$ARCH" in
    x86_64)
        ARCH_NAME="x86_64"
        DISPLAY_ARCH="Intel/AMD64"
        ;;
    arm64|aarch64)
        ARCH_NAME="aarch64"
        DISPLAY_ARCH="ARM64"
        ;;
    *)
        printf "%sError:%s Unsupported architecture: %s\n" "$RED$BOLD" "$RESET" "$ARCH"
        printf "       start-cli supports x86_64 and ARM64 only\n"
        exit 1
        ;;
esac

# Fetch latest version from GitHub (including pre-releases)
printf "%s•%s Fetching latest release...\n" "$YELLOW" "$RESET"
VERSION=$(curl -fsSL "https://api.github.com/repos/Start9Labs/start-os/releases?per_page=1" | grep -m1 '"tag_name":' | sed 's/.*: "//;s/",//')

if [ -z "$VERSION" ]; then
    printf "%sError:%s Could not determine latest version\n" "$RED$BOLD" "$RESET"
    exit 1
fi

printf "%s✓%s Latest version: %s\n" "$GREEN" "$RESET" "$VERSION"

# Download info
ASSET_NAME="start-cli_${ARCH_NAME}-${OS_NAME}"
DOWNLOAD_URL="https://github.com/Start9Labs/start-os/releases/download/${VERSION}/${ASSET_NAME}"

# System information (dynamically aligned)
BOX_WIDTH=63  # Total width inside the borders
printf "%s┌─ System Information ──────────────────────────────────────────┐%s\n" "$DIM" "$RESET"

# Calculate platform line padding
PLATFORM_TEXT="$DISPLAY_OS ($DISPLAY_ARCH)"
PLATFORM_LABEL="  Platform: "
PLATFORM_SPACES=$((BOX_WIDTH - ${#PLATFORM_LABEL} - ${#PLATFORM_TEXT}))
printf "%s│%s%s%s%s%*s%s│%s\n" "$DIM" "$RESET" "$PLATFORM_LABEL" "$GREEN" "$PLATFORM_TEXT" "$PLATFORM_SPACES" "" "$RESET$DIM" "$RESET"

# Calculate version line padding  
VERSION_TEXT="${VERSION#v}"
VERSION_LABEL="  Version:  "
VERSION_SPACES=$((BOX_WIDTH - ${#VERSION_LABEL} - ${#VERSION_TEXT}))
printf "%s│%s%s%s%s%*s%s│%s\n" "$DIM" "$RESET" "$VERSION_LABEL" "$GREEN" "$VERSION_TEXT" "$VERSION_SPACES" "" "$RESET$DIM" "$RESET"

printf "%s└───────────────────────────────────────────────────────────────┘%s\n" "$DIM" "$RESET"

# Create directories
printf "%s•%s Creating directories...\n" "$YELLOW" "$RESET"
mkdir -p "$HOME/.local/bin"

# Use /tmp to avoid directory issues when piped from curl
TEMP_DIR=$(mktemp -d)
trap 'rm -rf "$TEMP_DIR"' EXIT
mkdir -p "$TEMP_DIR"

# Download
printf "%s•%s Downloading from GitHub releases...\n" "$YELLOW" "$RESET"
if ! curl -fsSL "$DOWNLOAD_URL" -o "$TEMP_DIR/start-cli" 2>/dev/null; then
    printf "%sError:%s Failed to download from GitHub\n" "$RED$BOLD" "$RESET"
    printf "       %s\n" "$DOWNLOAD_URL"
    exit 1
fi
chmod +x "$TEMP_DIR/start-cli"
printf "%s✓%s Download completed\n" "$GREEN" "$RESET"

TEST_BINARY="$TEMP_DIR/start-cli"

INSTALLED_VERSION="unknown"
printf "%s•%s Testing binary...\n" "$YELLOW" "$RESET"
if "$TEST_BINARY" --version >/dev/null 2>&1; then
    INSTALLED_VERSION=$("$TEST_BINARY" --version 2>/dev/null | head -n1)
    printf "%s✓%s Binary test passed\n" "$GREEN" "$RESET"
else
    printf "%sWarning:%s Binary test failed, continuing...\n" "$YELLOW$BOLD" "$RESET"
fi

# Install
printf "%s•%s Installing to ~/.local/bin...\n" "$YELLOW" "$RESET"
cp "$TEST_BINARY" "$HOME/.local/bin/start-cli"
chmod +x "$HOME/.local/bin/start-cli"
printf "%s✓%s Installation completed\n" "$GREEN" "$RESET"

# Update shell configs
printf "%s•%s Updating shell configurations...\n" "$YELLOW" "$RESET"
PATH_UPDATE='export PATH="$HOME/.local/bin:$PATH"'
UPDATED_COUNT=0

for shell_rc in "$HOME/.bashrc" "$HOME/.zshrc" "$HOME/.profile"; do
    if [ -f "$shell_rc" ] && ! grep -q "HOME/.local/bin" "$shell_rc" 2>/dev/null; then
        echo "$PATH_UPDATE" >> "$shell_rc"
        UPDATED_COUNT=$((UPDATED_COUNT + 1))
    fi
done

if [ $UPDATED_COUNT -gt 0 ]; then
    printf "%s✓%s Shell configurations updated\n" "$GREEN" "$RESET"
else
    printf "%s✓%s No shell config updates needed\n" "$GREEN" "$RESET"
fi

# Success message (centered alignment)
printf "\n"
printf "%s┌───────────────────────────────────────────────────────────────┐%s\n" "$DIM$GREEN" "$RESET"
printf "%s│%s%20s%s%sINSTALLATION SUCCESSFUL%s%s%20s%s│%s\n" "$DIM$GREEN" "$RESET" "" "$RESET" "$GREEN" "$RESET" "$DIM$GREEN" "" "$DIM$GREEN" "$RESET"
printf "%s└───────────────────────────────────────────────────────────────┘%s\n" "$DIM$GREEN" "$RESET"
printf "\n"
printf "%sLocation:%s ~/.local/bin/start-cli\n" "$BOLD" "$RESET"
printf "%sVersion:%s  %s\n" "$BOLD" "$RESET" "$INSTALLED_VERSION"
printf "\n"

# Make available in current session
export PATH="$HOME/.local/bin:$PATH"

printf "%s•%s Making available in current session...\n" "$BLUE" "$RESET"

if command -v start-cli >/dev/null 2>&1; then
    printf "%s✓%s %sstart-cli%s is ready!\n" "$GREEN" "$RESET" "$WHITE$BOLD" "$RESET"
    printf "\n"

    # Clean command reference
    printf "%sCommon Commands:%s\n" "$BOLD" "$RESET"
    printf "%s────────────────────────────────────────────────────────────────%s\n" "$DIM" "$RESET"
    printf "  %sstart-cli init%s              Initialize developer key\n" "$GREEN" "$RESET"
    printf "  %sstart-cli auth login%s        Authenticate login to your StartOS\n" "$GREEN" "$RESET"
    printf "  %sstart-cli package list%s      List services\n" "$GREEN" "$RESET"
    printf "  %sstart-cli --help%s            Show all commands\n" "$GREEN" "$RESET"
    printf "\n"
    printf "%sDocumentation:%s https://docs.start9.com\n" "$BLUE" "$RESET"
else
    printf "%sNote:%s For new terminal sessions, %sstart-cli%s will be available automatically\n" "$BLUE$BOLD" "$RESET" "$WHITE$BOLD" "$RESET"
    printf "      For this session: export PATH=\"\$HOME/.local/bin:\$PATH\"\n"
fi

printf "\n"