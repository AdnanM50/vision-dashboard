// ProjectTable.jsx
'use client';
import React from 'react';

const ProjectsTable = ({ projects }) => {
    return (
        <div className="p-6 bg-gray-900 text-white">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Projects</h2>
                <span className="text-gray-400">30 done this month</span>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Companies</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Members</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Budget</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}>
                                <td className="px-6 py-4 whitespace-nowrap">{project.company}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* Render member icons */}
                                    <div className="flex space-x-2">
                                        {project.members.map((member, idx) => (
                                            <img key={idx} src={member.avatar} alt="member" className="w-6 h-6 rounded-full" />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{project.budget}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{project.completion}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectsTable;
