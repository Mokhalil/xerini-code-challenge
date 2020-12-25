import React from 'react';
import ApplicationShell from "../../app/layout/application-shell";

const ProjectsPage = () => {
    return (
        <ApplicationShell>
            <div className={'max-w-5xl mx-auto flex justify-center'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                     className={'w-64 h-64' +
                     ' text-gray-600 border-4 border-dashed rounded-full border-gray-400'}>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
            </div>
        </ApplicationShell>
    );
};

export default ProjectsPage;