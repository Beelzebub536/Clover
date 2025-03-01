import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  FileText, 
  Settings, 
  LogOut, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  Menu,
  X,
  Clover
} from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate authentication check
    setTimeout(() => {
      // For demo purposes, we'll consider the user authenticated
      // In a real app, you would check for a valid session/token
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogout = () => {
    // Simulate logout
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = '/login';
    }, 500);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Clover className="h-12 w-12 text-emerald-600 mx-auto animate-pulse" />
          <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading...</h2>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">You need to be logged in to access this page.</p>
              </div>
            </div>
          </div>
          <a
            href="/login"
            className="inline-block px-6 py-2 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors duration-300"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'team':
        return <TeamTab />;
      case 'jobs':
        return <JobsTab />;
      case 'content':
        return <ContentTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-md bg-white shadow-md text-gray-700 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Clover className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">Admin Panel</span>
          </div>
        </div>
        <nav className="mt-6">
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Main
          </div>
          <a
            href="#dashboard"
            onClick={() => {
              setActiveTab('dashboard');
              setIsMobileMenuOpen(false);
            }}
            className={`flex items-center px-4 py-3 text-gray-700 ${
              activeTab === 'dashboard' ? 'bg-emerald-50 text-emerald-600 border-r-4 border-emerald-500' : 'hover:bg-gray-50'
            }`}
          >
            <FileText className="h-5 w-5 mr-3" />
            Dashboard
          </a>
          <a
            href="#team"
            onClick={() => {
              setActiveTab('team');
              setIsMobileMenuOpen(false);
            }}
            className={`flex items-center px-4 py-3 text-gray-700 ${
              activeTab === 'team' ? 'bg-emerald-50 text-emerald-600 border-r-4 border-emerald-500' : 'hover:bg-gray-50'
            }`}
          >
            <Users className="h-5 w-5 mr-3" />
            Team Members
          </a>
          <a
            href="#jobs"
            onClick={() => {
              setActiveTab('jobs');
              setIsMobileMenuOpen(false);
            }}
            className={`flex items-center px-4 py-3 text-gray-700 ${
              activeTab === 'jobs' ? 'bg-emerald-50 text-emerald-600 border-r-4 border-emerald-500' : 'hover:bg-gray-50'
            }`}
          >
            <Briefcase className="h-5 w-5 mr-3" />
            Job Postings
          </a>
          <a
            href="#content"
            onClick={() => {
              setActiveTab('content');
              setIsMobileMenuOpen(false);
            }}
            className={`flex items-center px-4 py-3 text-gray-700 ${
              activeTab === 'content' ? 'bg-emerald-50 text-emerald-600 border-r-4 border-emerald-500' : 'hover:bg-gray-50'
            }`}
          >
            <FileText className="h-5 w-5 mr-3" />
            Content Management
          </a>
          <div className="px-4 py-2 mt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Account
          </div>
          <a
            href="#settings"
            onClick={() => {
              setActiveTab('settings');
              setIsMobileMenuOpen(false);
            }}
            className={`flex items-center px-4 py-3 text-gray-700 ${
              activeTab === 'settings' ? 'bg-emerald-50 text-emerald-600 border-r-4 border-emerald-500' : 'hover:bg-gray-50'
            }`}
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </a>
          <a
            href="#"
            onClick={handleLogout}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 p-6">
        <div className="mt-8 lg:mt-0">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

const DashboardTab = () => {
  const stats = [
    { title: 'Total Team Members', value: '52', icon: <Users className="h-6 w-6 text-blue-500" /> },
    { title: 'Active Projects', value: '24', icon: <Briefcase className="h-6 w-6 text-green-500" /> },
    { title: 'Job Applications', value: '128', icon: <FileText className="h-6 w-6 text-purple-500" /> },
    { title: 'Services Offered', value: '8', icon: <Settings className="h-6 w-6 text-orange-500" /> }
  ];

  const recentActivities = [
    { action: 'New job application received', time: '5 minutes ago', user: 'John Doe', position: 'Frontend Developer' },
    { action: 'Team member profile updated', time: '2 hours ago', user: 'Sarah Johnson', position: 'UI/UX Designer' },
    { action: 'New project added', time: '1 day ago', user: 'Admin', position: 'E-commerce Website' },
    { action: 'Content updated', time: '2 days ago', user: 'Admin', position: 'Services Page' }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className="bg-gray-100 rounded-full p-3">
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0"
            >
              <div className="bg-blue-100 rounded-full p-2 mr-4">
                <FileText className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-500">{activity.user} • {activity.position}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center p-4 bg-emerald-50 rounded-lg text-emerald-700 hover:bg-emerald-100 transition-colors duration-300">
              <Plus className="h-5 w-5 mr-2" />
              Add Team Member
            </button>
            <button className="flex items-center justify-center p-4 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors duration-300">
              <Plus className="h-5 w-5 mr-2" />
              Post New Job
            </button>
            <button className="flex items-center justify-center p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition-colors duration-300">
              <Edit className="h-5 w-5 mr-2" />
              Update Content
            </button>
            <button className="flex items-center justify-center p-4 bg-orange-50 rounded-lg text-orange-700 hover:bg-orange-100 transition-colors duration-300">
              <Settings className="h-5 w-5 mr-2" />
              System Settings
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">System Status</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Server Load</span>
                <span className="text-sm font-medium text-gray-700">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Database Usage</span>
                <span className="text-sm font-medium text-gray-700">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Storage</span>
                <span className="text-sm font-medium text-gray-700">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Memory Usage</span>
                <span className="text-sm font-medium text-gray-700">36%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '36%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const teamMembers = [
    {
      id: 1,
      name: "Ahmed Rahman",
      role: "CEO & Founder",
      email: "ahmed@cloversoft.com",
      phone: "+880 1234 567890",
      status: "active"
    },
    {
      id: 2,
      name: "Fatima Khan",
      role: "CTO",
      email: "fatima@cloversoft.com",
      phone: "+880 1234 567891",
      status: "active"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      role: "Lead Developer",
      email: "rahul@cloversoft.com",
      phone: "+880 1234 567892",
      status: "active"
    },
    {
      id: 4,
      name: "Priya Patel",
      role: "UI/UX Designer",
      email: "priya@cloversoft.com",
      phone: "+880 1234 567893",
      status: "active"
    },
    {
      id: 5,
      name: "Mohammad Ali",
      role: "3D Modeling Expert",
      email: "mohammad@cloversoft.com",
      phone: "+880 1234 567894",
      status: "active"
    }
  ];

  const filteredMembers = teamMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Team Members</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Member
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              placeholder="Search team members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
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
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-700 font-medium">{member.name.charAt(0)}</span>
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
                    <div className="text-sm text-gray-500">{member.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const JobsTab = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Development",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      applications: 24,
      status: "active"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      applications: 18,
      status: "active"
    },
    {
      id: 3,
      title: "3D Model Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      applications: 12,
      status: "active"
    },
    {
      id: 4,
      title: "Digital Marketer",
      department: "Marketing",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      applications: 8,
      status: "active"
    },
    {
      id: 5,
      title: "Data Entry Specialist",
      department: "Operations",
      location: "Remote",
      type: "Part-time",
      applications: 32,
      status: "active"
    }
  ];

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Job Postings</h1>
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Add Job
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applications
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray