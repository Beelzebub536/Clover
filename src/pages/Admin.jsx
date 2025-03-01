import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, Settings, LogOut, Plus, Edit, Trash2, Save, X } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('team');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  // Mock data for team members
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Ahmed Rahman',
      role: 'CEO & Founder',
      email: 'ahmed@cloversoft.com',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      id: 2,
      name: 'Fatima Khan',
      role: 'CTO',
      email: 'fatima@cloversoft.com',
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
      id: 3,
      name: 'Rahul Dev',
      role: 'Creative Director',
      email: 'rahul@cloversoft.com',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ]);
  
  // Mock data for job applications
  const [jobApplications, setJobApplications] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      position: 'Frontend Developer',
      appliedDate: '2023-05-15',
      status: 'Under Review',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      position: 'UI/UX Designer',
      appliedDate: '2023-05-12',
      status: 'Interview Scheduled',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      position: 'Data Entry Specialist',
      appliedDate: '2023-05-10',
      status: 'Rejected',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.williams@example.com',
      position: 'Digital Marketing Specialist',
      appliedDate: '2023-05-08',
      status: 'Hired',
    },
  ]);
  
  // State for editing team member
  const [editingMember, setEditingMember] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    role: '',
    email: '',
    imageUrl: '',
  });
  
  // Check authentication
  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('isAuthenticated');
      if (auth === 'true') {
        setIsAuthenticated(true);
      } else {
        navigate('/login');
      }
      setLoading(false);
    };
    
    checkAuth();
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };
  
  const handleAddMember = () => {
    if (newMember.name && newMember.role && newMember.email) {
      setTeamMembers([
        ...teamMembers,
        {
          id: teamMembers.length + 1,
          ...newMember,
        },
      ]);
      setNewMember({
        name: '',
        role: '',
        email: '',
        imageUrl: '',
      });
    }
  };
  
  const handleEditMember = (member) => {
    setEditingMember({ ...member });
  };
  
  const handleUpdateMember = () => {
    if (editingMember && editingMember.name && editingMember.role && editingMember.email) {
      setTeamMembers(
        teamMembers.map((member) =>
          member.id === editingMember.id ? editingMember : member
        )
      );
      setEditingMember(null);
    }
  };
  
  const handleDeleteMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };
  
  const handleUpdateApplicationStatus = (id, newStatus) => {
    setJobApplications(
      jobApplications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-600"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return null; // Will redirect to login via useEffect
  }
  
  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-gray-800 text-white">
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold">Admin Dashboard</h2>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setActiveTab('team')}
                      className={`w-full flex items-center px-4 py-3 rounded-md transition-colors duration-300 ${
                        activeTab === 'team'
                          ? 'bg-emerald-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Users className="h-5 w-5 mr-3" />
                      <span>Team Management</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('jobs')}
                      className={`w-full flex items-center px-4 py-3 rounded-md transition-colors duration-300 ${
                        activeTab === 'jobs'
                          ? 'bg-emerald-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Briefcase className="h-5 w-5 mr-3" />
                      <span>Job Applications</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full flex items-center px-4 py-3 rounded-md transition-colors duration-300 ${
                        activeTab === 'settings'
                          ? 'bg-emerald-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Settings className="h-5 w-5 mr-3" />
                      <span>Settings</span>
                    </button>
                  </li>
                  <li className="pt-4 mt-4 border-t border-gray-700">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-3 rounded-md text-gray-300 hover:bg-gray-700 transition-colors duration-300"
                    >
                      <LogOut className="h-5 w-5 mr-3" />
                      <span>Logout</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Team Management Tab */}
              {activeTab === 'team' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Team Management</h2>
                    <button
                      onClick={() => handleEditMember(null)}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-md flex items-center hover:bg-emerald-700 transition-colors duration-300"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Team Member
                    </button>
                  </div>
                  
                  {/* Add New Member Form */}
                  {editingMember === null && (
                    <div className="bg-gray-100 p-6 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Team Member</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Name</label>
                          <input
                            type="text"
                            value={newMember.name}
                            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Enter name"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Role</label>
                          <input
                            type="text"
                            value={newMember.role}
                            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Enter role"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Email</label>
                          <input
                            type="email"
                            value={newMember.email}
                            onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Enter email"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                          <input
                            type="text"
                            value={newMember.imageUrl}
                            onChange={(e) => setNewMember({ ...newMember, imageUrl: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            placeholder="Enter image URL"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={handleAddMember}
                          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300"
                        >
                          Add Member
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Edit Member Form */}
                  {editingMember && (
                    <div className="bg-gray-100 p-6 rounded-lg mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">Edit Team Member</h3>
                        <button
                          onClick={() => setEditingMember(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Name</label>
                          <input
                            type="text"
                            value={editingMember.name}
                            onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Role</label>
                          <input
                            type="text"
                            value={editingMember.role}
                            onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Email</label>
                          <input
                            type="email"
                            value={editingMember.email}
                            onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                          <input
                            type="text"
                            value={editingMember.imageUrl}
                            onChange={(e) => setEditingMember({ ...editingMember, imageUrl: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={handleUpdateMember}
                          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300 flex items-center"
                        >
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {/* Team Members List */}
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Member
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Role
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {teamMembers.map((member) => (
                          <tr key={member.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img className="h-10 w-10 rounded-full object-cover" src={member.imageUrl} alt={member.name} />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{member.name}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{member.role}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{member.email}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                onClick={() => handleEditMember(member)}
                                className="text-emerald-600 hover:text-emerald-900 mr-3"
                              >
                                <Edit className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => handleDeleteMember(member.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
              
              {/* Job Applications Tab */}
              {activeTab === 'jobs' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Applications</h2>
                  
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Applicant
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Position
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Applied Date
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {jobApplications.map((application) => (
                          <tr key={application.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">{application.name}</div>
                                  <div className="text-sm text-gray-500">{application.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{application.position}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{application.appliedDate}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                application.status === 'Hired'
                                  ? 'bg-green-100 text-green-800'
                                  : application.status === 'Rejected'
                                  ? 'bg-red-100 text-red-800'
                                  : application.status === 'Interview Scheduled'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {application.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <select
                                value={application.status}
                                onChange={(e) => handleUpdateApplicationStatus(application.id, e.target.value)}
                                className="text-sm border border-gray-300 rounded-md p-1"
                              >
                                <option value="Under Review">Under Review</option>
                                <option value="Interview Scheduled">Interview Scheduled</option>
                                <option value="Hired">Hired</option>
                                <option value="Rejected">Rejected</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
              
              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value="admin@cloversoft.com"
                          readOnly
                          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Change Password</label>
                        <input
                          type="password"
                          placeholder="Current password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-2"
                        />
                        <input
                          type="password"
                          placeholder="New password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-2"
                        />
                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      
                      <div className="pt-4">
                        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300">
                          Update Password
                        </button>
                      </div>
                    </div>
                    
                    <hr className="my-8" />
                    
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Notification Settings</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="emailNotifications"
                          className="h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                          defaultChecked
                        />
                        <label htmlFor="emailNotifications" className="ml-2 text-gray-700">
                          Email notifications for new job applications
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="loginAlerts"
                          className="h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                          defaultChecked
                        />
                        <label htmlFor="loginAlerts" className="ml-2 text-gray-700">
                          Login alerts for unusual activity
                        </label>
                      </div>
                      
                      <div className="pt-4">
                        <button className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300">
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;