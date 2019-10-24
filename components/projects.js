import React from "react"
import Link from 'next/link';
import project from "../static/tailwind-screenshot.jpg";

export default class Projects extends React.Component {
    render() {
        return (
            <div className="bg-blue-600 overflow-hidden shadow rounded">
                <div className="md:flex">
                    <div className="md:w-1/2 md:pt-16 md:pr-0 md:pl-12">
                        <Link className="project-link block relative"
                              to="/">
                            <img className="project absolute block rounded-t md:shadow-lg-dark"
                                 src={project} alt="Tailwind CSS"
                            />
                        </Link>
                    </div>
                    <div className="px-6 pt-8 pb-6 md:w-1/2 md:px-12 md:py-8 md:flex md:items-center">
                        <div>
                            <div className="text-white antialiased text-xl md:text-2xl font-medium">Personal
                                Website
                            </div>
                            <div className="mt-2 md:mt-3 text-white antialiased text-sm md:text-md leading-tight md:leading-normal opacity-75">
                                I wanted to redesign my website and give it a much needed face lift as well
                                as create a platform where i can share the knowledge i learn throughout my
                                career.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}