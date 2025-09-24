import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Users, MessageSquare, Star, Clock, Search, Filter } from 'lucide-react';

const PeerSupport = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const volunteers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Student Volunteer',
      year: 'Senior Psychology Student',
      specialties: ['Anxiety', 'Academic Stress', 'Social Anxiety'],
      mbtiType: 'INFJ',
      rating: 4.9,
      sessions: 127,
      available: true,
      languages: ['English', 'Mandarin'],
      bio: "I understand the challenges of academic pressure and social anxiety. I'm here to listen and share coping strategies that have helped me.",
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 2,
      name: 'Dr. Jennifer Martinez',
      role: 'Faculty Mentor',
      year: 'Associate Professor, Psychology',
      specialties: ['Depression', 'Stress Management', 'Crisis Support'],
      mbtiType: 'ENFJ',
      rating: 5.0,
      sessions: 89,
      available: true,
      languages: ['English', 'Spanish'],
      bio: "As both a professor and licensed counselor, I provide professional guidance in a peer-friendly environment.",
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 3,
      name: 'Alex Thompson',
      role: 'Student Volunteer',
      year: 'Graduate Student, Social Work',
      specialties: ['LGBTQ+ Support', 'Relationship Issues', 'Self-Discovery'],
      mbtiType: 'ENFP',
      rating: 4.8,
      sessions: 73,
      available: false,
      languages: ['English'],
      bio: "I believe in the power of authentic connection and creating safe spaces for everyone to be themselves.",
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 4,
      name: 'Maria Rodriguez',
      role: 'Student Volunteer',
      year: 'Junior Pre-Med',
      specialties: ['Academic Pressure', 'Perfectionism', 'Burnout'],
      mbtiType: 'ISTJ',
      rating: 4.7,
      sessions: 45,
      available: true,
      languages: ['English', 'Spanish'],
      bio: "Having struggled with perfectionism myself, I understand the pressure pre-med students face. Let's work through it together.",
      avatar: '/api/placeholder/40/40'
    },
    {
      id: 5,
      name: 'David Kim',
      role: 'Graduate Mentor',
      year: 'PhD Candidate, Clinical Psychology',
      specialties: ['Crisis Recovery', 'Trauma Support', 'Mindfulness'],
      mbtiType: 'INTJ',
      rating: 4.9,
      sessions: 156,
      available: true,
      languages: ['English', 'Korean'],
      bio: "Specializing in trauma-informed care and mindfulness-based interventions. Here to provide professional yet approachable support.",
      avatar: '/api/placeholder/40/40'
    }
  ];

  const supportGroups = [
    {
      id: 1,
      name: 'Anxiety Support Circle',
      description: 'A safe space to share experiences and coping strategies for anxiety',
      members: 23,
      nextMeeting: '2025-01-15 19:00',
      facilitator: 'Sarah Chen',
      type: 'Weekly'
    },
    {
      id: 2,
      name: 'Academic Stress Management',
      description: 'Strategies for managing coursework, exams, and academic pressure',
      members: 31,
      nextMeeting: '2025-01-17 18:00',
      facilitator: 'Dr. Jennifer Martinez',
      type: 'Bi-weekly'
    },
    {
      id: 3,
      name: 'MBTI Self-Discovery Group',
      description: 'Explore your personality type and how it affects your mental health',
      members: 18,
      nextMeeting: '2025-01-20 20:00',
      facilitator: 'Alex Thompson',
      type: 'Monthly'
    }
  ];

  const filteredVolunteers = volunteers.filter(volunteer => {
    const matchesSearch = volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         volunteer.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === 'all' || volunteer.specialties.includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  const specialties = ['all', 'Anxiety', 'Depression', 'Academic Stress', 'Social Anxiety', 'Crisis Support', 'LGBTQ+ Support'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-6 w-6 text-blue-500" />
              <h1 className="text-4xl font-bold">Peer Support Network</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with trained student volunteers and faculty mentors who understand your journey
            </p>
          </div>

          <Tabs defaultValue="volunteers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="volunteers">Find Volunteers</TabsTrigger>
              <TabsTrigger value="groups">Support Groups</TabsTrigger>
              <TabsTrigger value="request">Request Support</TabsTrigger>
            </TabsList>

            <TabsContent value="volunteers" className="space-y-6">
              {/* Search and Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Find the Right Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Search by name or specialty..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Filter by specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties.map(specialty => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty === 'all' ? 'All Specialties' : specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Volunteers Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVolunteers.map(volunteer => (
                  <Card key={volunteer.id} className={`hover:shadow-lg transition-shadow ${
                    !volunteer.available ? 'opacity-75' : ''
                  }`}>
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                          <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{volunteer.name}</CardTitle>
                          <CardDescription>{volunteer.role}</CardDescription>
                          <p className="text-sm text-muted-foreground">{volunteer.year}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{volunteer.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{volunteer.bio}</p>
                      
                      <div>
                        <p className="text-sm font-medium mb-2">Specialties:</p>
                        <div className="flex flex-wrap gap-1">
                          {volunteer.specialties.map(specialty => (
                            <Badge key={specialty} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>MBTI: {volunteer.mbtiType}</span>
                        <span>{volunteer.sessions} sessions</span>
                      </div>
                      
                      <div className="flex justify-between text-sm">
                        <span>Languages: {volunteer.languages.join(', ')}</span>
                        <Badge variant={volunteer.available ? "default" : "secondary"}>
                          {volunteer.available ? 'Available' : 'Busy'}
                        </Badge>
                      </div>
                      
                      <Button 
                        className="w-full" 
                        disabled={!volunteer.available}
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {volunteer.available ? 'Start Conversation' : 'Currently Unavailable'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="groups" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Support Groups</CardTitle>
                  <CardDescription>
                    Join group sessions with others who share similar experiences
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="grid gap-6">
                {supportGroups.map(group => (
                  <Card key={group.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{group.name}</CardTitle>
                          <CardDescription className="mt-2">{group.description}</CardDescription>
                        </div>
                        <Badge>{group.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">{group.members} members</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Next: {new Date(group.nextMeeting).toLocaleDateString()}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Facilitator: </span>
                          <span className="font-medium">{group.facilitator}</span>
                        </div>
                      </div>
                      <Button>Join Group</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="request" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Request Support</CardTitle>
                  <CardDescription>
                    Describe what kind of support you're looking for and we'll match you with the right volunteer
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">What type of support do you need?</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select support type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="anxiety">Anxiety Support</SelectItem>
                        <SelectItem value="depression">Depression Support</SelectItem>
                        <SelectItem value="academic">Academic Stress</SelectItem>
                        <SelectItem value="social">Social Anxiety</SelectItem>
                        <SelectItem value="crisis">Crisis Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Preferred volunteer type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student Volunteer</SelectItem>
                        <SelectItem value="faculty">Faculty Mentor</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                        <SelectItem value="any">No Preference</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tell us more about your situation</label>
                    <Textarea 
                      placeholder="Share what you're going through and what kind of support would be most helpful..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Urgency Level</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low - Can wait a few days</SelectItem>
                        <SelectItem value="medium">Medium - Would like support within 24 hours</SelectItem>
                        <SelectItem value="high">High - Need support today</SelectItem>
                        <SelectItem value="crisis">Crisis - Need immediate help</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="w-full">Submit Support Request</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeerSupport;