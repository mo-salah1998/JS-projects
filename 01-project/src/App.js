import './App.css';
import {useState, useEffect} from "react";

function App() {

    let [dark, setDark] = useState(false)

    useEffect(() => {
        if (dark) {

            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    let changeTheme = (e) => {
        e.preventDefault()
        setDark(!dark);
        console.log(dark)
    }


    return (<div className="App ">
        <div className="transition-all duration-500 bg-white dark:bg-gray-800 text-blue-50 ">
            <div className="pt-6 ">
                <nav aria-label="Breadcrumb" className="grid grid-cols-2 max-w-2xl lg:max-w-7xl mx-auto ">
                    <ol
                        className="flex flex-wrap items-center max-w-2xl px-2 space-x-2 sm:px-6 lg:max-w-7xl lg:px-8 ">
                        <li>
                            <div className="flex items-center">
                                <a href="#" className="mr-2 text-sm font-medium text-gray-900 dark:color-white">Men</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
                                     aria-hidden="true"
                                     className="w-4 h-5 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <a href="#"
                                   className="mr-2 text-sm font-medium text-gray-900 dark:color-white">Clothing</a>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor"
                                     aria-hidden="true"
                                     className="w-4 h-5 text-gray-300">
                                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                                </svg>
                            </div>
                        </li>
                        <li className="text-sm">
                            <a href="#" aria-current="page"
                               className="font-medium text-gray-500 hover:text-gray-600 dark:color-white">Basic
                                Tee 6-Pack</a>
                        </li>
                    </ol>
                    <button value={dark} onClick={changeTheme}
                            className="themeBtn">{dark === true ? "light" : "Dark"}  </button>
                </nav>


                <div
                    className="max-w-2xl mx-auto mt-6  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="hidden overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                            alt="Two each of gray, white, and black shirts laying flat."
                            className="object-cover object-center w-full h-full"/>
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                                alt="Model wearing plain black basic tee."
                                className="object-cover object-center w-full h-full"/>
                        </div>
                        <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                                alt="Model wearing plain gray basic tee."
                                className="object-cover object-center w-full h-full"/>
                        </div>
                    </div>
                    <div
                        className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                            alt="Model wearing plain white basic tee."
                            className="object-cover object-center w-full h-full"/>
                    </div>
                </div>


                <div
                    className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:color-white sm:text-3xl">Basic
                            Tee
                            6-Pack</h1>
                    </div>


                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only ">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900 dark:color-white ">$192</p>


                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-200" viewBox="0 0 20 20"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <p className="sr-only">4 out of 5 stars</p>
                                <a href="#"
                                   className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117
                                    reviews</a>
                            </div>
                        </div>

                        <form className="mt-10">

                            <div>
                                <h3 className="text-sm font-medium text-gray-900 dark:color-white">Color</h3>

                                <fieldset className="mt-4">
                                    <legend className="sr-only">Choose a color</legend>
                                    <div className="flex items-center space-x-3">

                                        <label
                                            className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                            <input type="radio" name="color-choice" value="White"
                                                   className="sr-only"
                                                   aria-labelledby="color-choice-0-label"/>
                                            <span id="color-choice-0-label" className="sr-only">White</span>
                                            <span aria-hidden="true"
                                                  className="w-8 h-8 bg-white border border-black rounded-full border-opacity-10"></span>
                                        </label>

                                        <label
                                            className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                            <input type="radio" name="color-choice" value="Gray" className="sr-only"
                                                   aria-labelledby="color-choice-1-label"/>
                                            <span id="color-choice-1-label" className="sr-only">Gray</span>
                                            <span aria-hidden="true"
                                                  className="w-8 h-8 bg-gray-200 border border-black rounded-full border-opacity-10"></span>
                                        </label>

                                        <label
                                            className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                                            <input type="radio" name="color-choice" value="Black"
                                                   className="sr-only"
                                                   aria-labelledby="color-choice-2-label"/>
                                            <span id="color-choice-2-label" className="sr-only">Black</span>
                                            <span aria-hidden="true"
                                                  className="w-8 h-8 bg-gray-900 border border-black rounded-full border-opacity-10"></span>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>


                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900 dark:color-white">Size</h3>
                                    <a href="#"
                                       className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size
                                        guide</a>
                                </div>

                                <fieldset className="mt-4">
                                    <legend className="sr-only">Choose a size</legend>
                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                                        <label
                                            className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-200 uppercase border rounded-md cursor-not-allowed group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50">
                                            <input type="radio" name="size-choice" value="XXS" disabled
                                                   className="sr-only" aria-labelledby="size-choice-0-label"/>
                                            <span id="size-choice-0-label">XXS</span>
                                            <span aria-hidden="true"
                                                  className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px">
                    <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100"
                         preserveAspectRatio="none" stroke="currentColor">
                      <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke"/>
                    </svg>
                  </span>
                                        </label>

                                        <label
                                            className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                            <input type="radio" name="size-choice" value="XS" className="sr-only"
                                                   aria-labelledby="size-choice-1-label"/>
                                            <span id="size-choice-1-label">XS</span>

                                            <span className="absolute rounded-md pointer-events-none -inset-px"
                                                  aria-hidden="true"></span>
                                        </label>

                                        <label
                                            className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                            <input type="radio" name="size-choice" value="S" className="sr-only"
                                                   aria-labelledby="size-choice-2-label"/>
                                            <span id="size-choice-2-label">S</span>

                                            <span className="absolute rounded-md pointer-events-none -inset-px"
                                                  aria-hidden="true"></span>
                                        </label>
                                        <label
                                            className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                            <input type="radio" name="size-choice" value="M" className="sr-only"
                                                   aria-labelledby="size-choice-3-label"/>
                                            <span id="size-choice-3-label">M</span>

                                            <span className="absolute rounded-md pointer-events-none -inset-px"
                                                  aria-hidden="true"></span>
                                        </label>

                                        <label
                                            className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                            <input type="radio" name="size-choice" value="L" className="sr-only"
                                                   aria-labelledby="size-choice-4-label"/>
                                            <span id="size-choice-4-label">L</span>

                                            <span className="absolute rounded-md pointer-events-none -inset-px"
                                                  aria-hidden="true"></span>
                                        </label>

                                        <label
                                            className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                            <input type="radio" name="size-choice" value="XL" className="sr-only"
                                                   aria-labelledby="size-choice-5-label"/>
                                            <span id="size-choice-5-label">XL</span>

                                            <span className="absolute rounded-md pointer-events-none -inset-px"
                                                  aria-hidden="true"></span>
                                        </label>

                                        <label
                                            className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                            <input type="radio" name="size-choice" value="2XL" className="sr-only"
                                                   aria-labelledby="size-choice-6-label"/>
                                            <span id="size-choice-6-label">2XL</span>

                                            <span className="absolute rounded-md pointer-events-none -inset-px"
                                                  aria-hidden="true"></span>
                                        </label>

                                        <label
                                            className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                                            <input type="radio" name="size-choice" value="3XL" className="sr-only"
                                                   aria-labelledby="size-choice-7-label"/>
                                            <span id="size-choice-7-label">3XL</span>

                                            <span className="absolute rounded-md pointer-events-none -inset-px"
                                                  aria-hidden="true"></span>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>

                            <button type="submit"
                                    className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add
                                to bag
                            </button>
                        </form>
                    </div>

                    <div
                        className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900 dark:color-white ">The Basic Tee 6-Pack allows you
                                    to fully
                                    express
                                    your vibrant personality with three grayscale options. Feeling adventurous? Put
                                    on a
                                    heather gray tee. Want to be a trendsetter? Try our exclusive
                                    colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit?
                                    Our
                                    white tee has you covered.</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900 dark:color-white ">Highlights</h3>

                            <div className="mt-4">
                                <ul className="pl-4 space-y-2 text-sm list-disc">
                                    <li className="text-gray-400"><span className="text-gray-600 dark:color-white">Hand cut and sewn locally</span>
                                    </li>
                                    <li className="text-gray-400"><span className="text-gray-600 dark:color-white">Dyed with our proprietary colors</span>
                                    </li>
                                    <li className="text-gray-400 dark:color-white"><span
                                        className="text-gray-600 dark:color-white">Pre-washed &amp; pre-shrunk</span>
                                    </li>
                                    <li className="text-gray-400 dark:color-white"><span
                                        className="text-gray-600 dark:color-white">Ultra-soft 100% cotton</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900 dark:color-white">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600 dark:color-white ">The 6-Pack includes two black,
                                    two white, and
                                    two
                                    heather gray Basic Tees. Sign up for our subscription service and be the first
                                    to
                                    get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited
                                    release.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>);
}

export default App;
