import {
Astronav,
MenuItems,
MenuIcon,
Dropdown,
DropdownItems,
DropdownSubmenu
} from "astro-navbar";
import DayNight from "../components/CADD/DayNight.astro";

<Fragment>
<style>{`
   header{
      transition: all .2s;
   }
`}</style>


<header class="lg:flex justify-between p-5  gap-5 mx-auto container md:justify-center fixed w-full z-10">

<Astronav closeOnClick>
<div class="flex w-full items-center  lg:w-auto justify-between">
{/** <a class="-mt-2" ><LogoOnly   zoom="0" theme="white" theme_text="#00aeff" face="none" ></a> */}
<DayNight></DayNight>
<div class="block lg:hidden">

<MenuIcon class=" md:w-8 md:h-8  text-current" />
</div>
</div>


<MenuItems class="hidden lg:flex">

<ul class="flex flex-col lg:flex-row lg:gap-5 mt-5">
<li>
<a href="#">Home</a>
</li>
<li>
<Dropdown class="group">
<button class="flex items-center">
<span> About</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180" {...{ "stroke-width": "3" }}>
<path d="M19.5 8.25l-7.5 7.5-7.5-7.5" {...{ "stroke-linecap": "round", "stroke-linejoin": "round" }}></path>
</svg>
</button>
<DropdownItems class="relative">
<div class="lg:absolute bg-white top-2 w-40 border shadow rounded p-2">
<ul>
<li>
<a href="#">Menu 1</a>
</li>
<li>
<a href="#">Menu 2</a>
</li>
<li>
<DropdownSubmenu class="group/submenu">
<button class="flex w-full items-center justify-between">
<span> Dropdown</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open/submenu:rotate-180" {...{ "stroke-width": "3" }}>
<path d="M8.25 4.5l7.5 7.5-7.5 7.5" {...{ "stroke-linecap": "round", "stroke-linejoin": "round" }}></path>
</svg>
</button>
<DropdownItems class="relative">
<ul class="lg:absolute bg-white top-0 left-full w-40 border shadow rounded p-2">
<li>
<a href="#">Submenu 1</a>
</li>
<li>
<a href="#">Submenu 2</a>
</li>
<li>
<DropdownSubmenu class="group/nestedsubmenu">
<button class="flex w-full items-center justify-between">
<span>
Dropdown</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open/nestedsubmenu:rotate-180" {...{ "stroke-width": "3" }}>
<path d="M8.25 4.5l7.5 7.5-7.5 7.5" {...{ "stroke-linecap": "round", "stroke-linejoin": "round" }}></path>
</svg>
</button>
<DropdownItems class="relative">
<ul class="lg:absolute bg-white top-0 left-full w-40 border shadow rounded p-2">
<li>
<a href="#">Submenu
1</a>
</li>
<li>
<a href="#">Submenu
2</a>
</li>
</ul>
</DropdownItems>
</DropdownSubmenu>
</li>
</ul>
</DropdownItems>
</DropdownSubmenu>
</li>
<li>
<DropdownSubmenu class="group/submenu">
<button class="flex w-full items-center justify-between">
<span> Dropdown</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open/submenu:rotate-180" {...{ "stroke-width": "3" }}>
<path d="M8.25 4.5l7.5 7.5-7.5 7.5" {...{ "stroke-linecap": "round", "stroke-linejoin": "round" }}></path>
</svg>
</button>
<DropdownItems class="relative">
<ul class="lg:absolute bg-white top-0 left-full w-40 border shadow rounded p-2">
<li>
<a href="#">Submenu 1</a>
</li>
<li>
<a href="#">Submenu 2</a>
</li>
</ul>
</DropdownItems>
</DropdownSubmenu>
</li>
</ul>
</div>
</DropdownItems>
</Dropdown>
</li>
<li>
<Dropdown class="group">
<button class="flex items-center">{`
                     <@link to="/Services">`}<span> Services</span>{/***/}{`@link>
                     `}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open:rotate-180" {...{ "stroke-width": "3" }}>
<path d="M19.5 8.25l-7.5 7.5-7.5-7.5" {...{ "stroke-linecap": "round", "stroke-linejoin": "round" }}></path>
</svg>
</button>
<DropdownItems class="relative">
<div class="lg:absolute bg-white top-2 w-40 border shadow rounded p-2">
<ul>
<li>
<a href="#">Menu 1</a>
</li>
<li>
<a href="#">Menu 2</a>
</li>
<li>
<DropdownSubmenu class="group/submenu">
<button class="flex w-full items-center justify-between">
<span> Dropdown</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-3 h-3 mt-0.5 group-open/submenu:rotate-180" {...{ "stroke-width": "3" }}>
<path d="M8.25 4.5l7.5 7.5-7.5 7.5" {...{ "stroke-linecap": "round", "stroke-linejoin": "round" }}></path>
</svg>
</button>
<DropdownItems class="relative">
<ul class="lg:absolute bg-white top-0 left-full w-40 border shadow rounded p-2">
<li>
<a href="#">Submenu 1</a>
</li>
<li>
<a href="#">Submenu 2</a>
</li>
</ul>
</DropdownItems>
</DropdownSubmenu>
</li>
</ul>
</div>
</DropdownItems>
</Dropdown>
<li>
<a href="#">Pricing</a>
</li>
<li>
<a href="#">Contact</a>
</li>
</li>
</ul>
{/** <div class="hidden md:block self-center px-5" >
       <DayNight fontsize="1rem"></DayNight>
    </div> */}
</MenuItems>
</Astronav>
</header>



{/** Agrega este script al final de tu archivo HTML */}
<script is:inline>
{() => {
document.addEventListener("DOMContentLoaded", function () {
var header = document.querySelector("header");
var lastScrollTop = 0;

window.addEventListener("scroll", function () {
var st = window.pageYOffset || document.documentElement.scrollTop;

if (st > lastScrollTop) {
// Desplazamiento hacia abajo
header.style.transform = "translateY(-100%)";
} else {
// Desplazamiento hacia arriba
header.style.transform = "translateY(0)";
}

lastScrollTop = st;
});
});
}}
</script>
</Fragment>;
