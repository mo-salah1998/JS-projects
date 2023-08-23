import {PhotoIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import {useState, ChangeEvent} from "react";

export default function Cv() {


    const [file, setFile] = useState("");
    const [languages, setLanguages] = useState([]);
    const [newLanguage, setNewLanguage] = useState('');

    const handleLanguageChange = (e) => {
        setNewLanguage(e.target.value);
    };

    const addLanguage = (e) => {
        e.preventDefault();
        if (newLanguage) {
            setLanguages([...languages, newLanguage]);
            setNewLanguage('');
        }
    };
    const handleFileChange = (e) => {
        if (e.target.files) {
            console.log(e.target.files[0]);
            setFile(e.target.files[0]);
        }
    };

    let code = () => {
        if (file) {
            return <>
                <div className=" ">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder="First Name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        placeholder="Family Name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Your Email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        placeholder="Phone Number"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Tunisia</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>

                            </div>
                            <div className="sm:col-span-3 ">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        placeholder="City"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3 ">
                                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        placeholder="Region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="postal-code"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="street-address"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 border-b border-gray-900/10 pb-12 ">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Label
                            </label>
                            <div className="mt-2">
                                <div
                                    className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span
                                        className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                                    <input
                                        type="text"
                                        name="Label"
                                        id="label"
                                        autoComplete="label"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Label : Designer, Developer ... "
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                Summary
                            </label>
                            <div className="mt-2">

                <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                />
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">A few sentences about yourself.</p>
                        </div>
                    </div>

                    <h2 className="text-base font-semibold leading-7 text-gray-900 pt-8">Experience</h2>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-3">

                                <label htmlFor="Company" className="block text-sm font-medium leading-6 text-gray-900">
                                    Company
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Company"
                                        id="Company"
                                        autoComplete="Company"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                        </div>
                        <div className="sm:col-span-3">
                                <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">
                                    Position
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                        </div>
                        <div className="sm:col-span-3">
                                <label htmlFor="startDate"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    start Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="Start Date"
                                        id="start-date"
                                        autoComplete="startDate"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        <div className="sm:col-span-3">
                                <label htmlFor="EndtDate"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    End Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="end Date"
                                        id="end-date"
                                        autoComplete="startDate"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        <div className="sm:col-span-6">
                            <div className="border-b border-gray-900/10 pb-12">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Summary
                                </label>
                                <div className="mt-2">

                                    <textarea
                                        id="Summary"
                                        name="Summary"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-3">

                            <label htmlFor="Company" className="block text-sm font-medium leading-6 text-gray-900">
                                Company
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Company"
                                    id="Company"
                                    autoComplete="Company"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">
                                Position
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="startDate"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                start Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="Start Date"
                                    id="start-date"
                                    autoComplete="startDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="EndtDate"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                End Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="end Date"
                                    id="end-date"
                                    autoComplete="startDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <div className="border-b border-gray-900/10 pb-12">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Summary
                                </label>
                                <div className="mt-2">

                                    <textarea
                                        id="Summary"
                                        name="Summary"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-3">

                            <label htmlFor="Company" className="block text-sm font-medium leading-6 text-gray-900">
                                Company
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Company"
                                    id="Company"
                                    autoComplete="Company"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">
                                Position
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="region"
                                    id="region"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="startDate"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                start Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="Start Date"
                                    id="start-date"
                                    autoComplete="startDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="EndtDate"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                End Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="end Date"
                                    id="end-date"
                                    autoComplete="startDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <div className="border-b border-gray-900/10 pb-12">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Summary
                                </label>
                                <div className="mt-2">

                                    <textarea
                                        id="Summary"
                                        name="Summary"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <h2 className="text-base font-semibold leading-7 text-gray-900">education</h2>

                <div >
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-3">

                            <label htmlFor="institution" className="block text-sm font-medium leading-6 text-gray-900">
                                Institution
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Institution"
                                    id="Institution"
                                    autoComplete="Institution"
                                    placeholder="Exm : Institution Harvord ..."
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Area" className="block text-sm font-medium leading-6 text-gray-900">
                                Area
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Area"
                                    id="area"
                                    autoComplete="Area"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Software Development"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="startDate"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                start Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="Start Date"
                                    id="start-date"
                                    autoComplete="startDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="EndtDate"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                End Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="end Date"
                                    id="end-date"
                                    autoComplete="startDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <div className="border-b border-gray-900/10 pb-12">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Summary
                                </label>
                                <div className="mt-2">

                                    <textarea
                                        id="Summary"
                                        name="Summary"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                        <div className="sm:col-span-3">

                            <label htmlFor="institution" className="block text-sm font-medium leading-6 text-gray-900">
                                Institution
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Institution"
                                    id="Institution"
                                    autoComplete="Institution"
                                    placeholder="Exm : Institution Harvord ..."
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Area" className="block text-sm font-medium leading-6 text-gray-900">
                                Area
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Area"
                                    id="area"
                                    autoComplete="Area"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Software Development"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="startDate"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                start Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="Start Date"
                                    id="start-date"
                                    autoComplete="startDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="EndtDate"
                                   className="block text-sm font-medium leading-6 text-gray-900">
                                End Date
                            </label>
                            <div className="mt-2">
                                <input
                                    type="date"
                                    name="end Date"
                                    id="end-date"
                                    autoComplete="startDate"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-6">
                            <div className="border-b border-gray-900/10 pb-12">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Summary
                                </label>
                                <div className="mt-2">

                                    <textarea
                                        id="Summary"
                                        name="Summary"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>



                        </div>
                    </div>


                </div>

                <h2 className="text-base font-semibold leading-7 text-gray-900 pt-8">languages </h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                    <ul className="sm:col-span-3 list-none list-item list-inside">
                        {languages.map((language, index) => (
                            <li className="" key={index}>{language}</li>
                        ))}
                    </ul>
                    <div className="sm:col-span-6 mt-4">
                        <input
                            type="text"
                            value={newLanguage}
                            onChange={handleLanguageChange}
                            placeholder="Enter a new language"
                            className="border p-2 rounded-md mr-2"
                        />
                        <button
                            onClick={addLanguage}
                            className="bg-gray-800 text-white px-4 py-2 rounded-md"
                        >
                            Add Language
                        </button>
                    </div>


                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </>
        }


    }
    return (<div
        className="mx-auto max-w-4xl sm:my-12 py-10 border-2 sm:rounded-2xl lg:px-8 px-2 shadow-[0px_2px_20px_10px_#00000020] ">
        <form>
            <div className="space-y-12">
                <div className="col-span-full">
                    <label htmlFor="cover-photo" className="text-base block font-semibold leading-7 text-gray-900">
                        Uplode Your CV Here :
                    </label>
                    <div
                        className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold dark:text-red-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-200 focus-within:ring-offset-2 hover:text-red-600"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only"
                                           onChange={handleFileChange}/>
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PDF ,PNG, JPG, GIF up to 10MB</p>
                            <p className="text-xs leading-5 text-gray-600">{file.name}</p>

                        </div>
                    </div>
                </div>
                {code()}
            </div>

        </form>
    </div>)
}
