import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase, window.DrawSVGPlugin, ScrollTrigger);