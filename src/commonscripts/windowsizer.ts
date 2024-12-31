const breakpoints = {
    isMobile: window.matchMedia("(max-width: 639px)"),
    isTablet: window.matchMedia("(min-width: 640px) and (max-width: 1023px)"),
    isLaptop: window.matchMedia("(min-width: 1024px) and (max-width: 1279px)"),
    isLaptopLarge: window.matchMedia("(min-width: 1280px) and (max-width: 1535px)"),
    isDesktop: window.matchMedia("(min-width: 1536px)")
};

let isMobile = breakpoints.isMobile.matches;
let isTablet = breakpoints.isTablet.matches;
let isLaptop = breakpoints.isLaptop.matches;
let isLaptopLarge = breakpoints.isLaptopLarge.matches;
let isDesktop = breakpoints.isDesktop.matches;

const updateBreakpoints = () => {
    isMobile = breakpoints.isMobile.matches;
    isTablet = breakpoints.isTablet.matches;
    isLaptop = breakpoints.isLaptop.matches;
    isLaptopLarge = breakpoints.isLaptopLarge.matches;
    isDesktop = breakpoints.isDesktop.matches;
};

Object.values(breakpoints).forEach(breakpoint => {
    breakpoint.addEventListener('change', updateBreakpoints);
});

export { isMobile, isTablet, isLaptop, isLaptopLarge, isDesktop };
window.addEventListener('resize', updateBreakpoints);