import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Calendar } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { CalendarIcon, MapPin, Star, Clock, Phone, Video, User, Search, Filter } from 'lucide-react';
import { format } from 'date-fns';

const PsychiatristBooking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState('');
  const [consultationType, setConsultationType] = useState('');

  const psychiatrists = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'MD, Psychiatrist',
      specialties: ['Depression', 'Anxiety Disorders', 'Bipolar Disorder'],
      experience: '15 years',
      rating: 4.9,
      reviews: 127,
      location: 'Downtown Medical Center',
      consultationFee: 150,
      languages: ['English'],
      education: 'Harvard Medical School',
      certifications: ['Board Certified Psychiatrist', 'Cognitive Behavioral Therapy'],
      avatar: '/api/placeholder/60/60',
      availableSlots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
      consultationTypes: ['In-Person', 'Video Call'],
      severity: ['Moderate', 'Severe'],
      bio: 'Specializing in mood disorders with over 15 years of experience. I use evidence-based treatments including medication management and psychotherapy.'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'MD, Child & Adolescent Psychiatrist',
      specialties: ['Teen Depression', 'ADHD', 'Autism Spectrum'],
      experience: '12 years',
      rating: 4.8,
      reviews: 89,
      location: 'University Hospital',
      consultationFee: 180,
      languages: ['English', 'Mandarin'],
      education: 'Johns Hopkins University',
      certifications: ['Child & Adolescent Psychiatry', 'ADHD Specialist'],
      avatar: '/api/placeholder/60/60',
      availableSlots: ['10:00 AM', '1:00 PM', '3:00 PM'],
      consultationTypes: ['In-Person', 'Video Call'],
      severity: ['Mild', 'Moderate', 'Severe'],
      bio: 'Dedicated to helping children and teenagers overcome mental health challenges through compassionate, family-centered care.'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'MD, Trauma Specialist',
      specialties: ['PTSD', 'Trauma Recovery', 'Crisis Intervention'],
      experience: '18 years',
      rating: 5.0,
      reviews: 156,
      location: 'Mental Health Institute',
      consultationFee: 200,
      languages: ['English', 'Spanish'],
      education: 'Stanford Medical School',
      certifications: ['Trauma-Informed Care', 'EMDR Therapy', 'Crisis Intervention'],
      avatar: '/api/placeholder/60/60',
      availableSlots: ['9:30 AM', '12:00 PM', '3:30 PM'],
      consultationTypes: ['In-Person', 'Video Call', 'Phone Consultation'],
      severity: ['Severe', 'Crisis'],
      bio: 'Expert in trauma recovery and crisis intervention. I provide specialized care for individuals dealing with PTSD and complex trauma.'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      title: 'MD, Geriatric Psychiatrist',
      specialties: ['Dementia', 'Late-Life Depression', 'Anxiety in Elderly'],
      experience: '20 years',
      rating: 4.7,
      reviews: 203,
      location: 'Senior Care Center',
      consultationFee: 160,
      languages: ['English'],
      education: 'Mayo Clinic College of Medicine',
      certifications: ['Geriatric Psychiatry', 'Dementia Care Specialist'],
      avatar: '/api/placeholder/60/60',
      availableSlots: ['8:00 AM', '10:30 AM', '1:30 PM'],
      consultationTypes: ['In-Person', 'Video Call'],
      severity: ['Mild', 'Moderate'],
      bio: 'Specializing in mental health care for older adults, with expertise in age-related cognitive and mood disorders.'
    }
  ];

  const timeSlots = [
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const specialties = ['all', 'Depression', 'Anxiety Disorders', 'Bipolar Disorder', 'PTSD', 'ADHD', 'Teen Depression'];

  const filteredPsychiatrists = psychiatrists.filter(psychiatrist => {
    const matchesSearch = psychiatrist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         psychiatrist.specialties.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSpecialty = selectedSpecialty === 'all' || psychiatrist.specialties.includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  const handleBookAppointment = (psychiatrist) => {
    if (!selectedDate || !selectedTime || !consultationType) {
      alert('Please select a date, time, and consultation type before booking.');
      return;
    }
    
    // In a real app, this would make an API call
    alert(`Appointment booked with ${psychiatrist.name} on ${format(selectedDate, 'PPP')} at ${selectedTime} (${consultationType})`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Professional Psychiatrist Consultation</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book appointments with licensed psychiatrists for professional mental health care
            </p>
          </div>

          {/* Severity-based Recommendation */}
          <Card className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-700">Professional Care Recommended</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800">
                Based on your assessment results showing <strong>moderate to severe symptoms</strong>, 
                we strongly recommend consulting with a professional psychiatrist for comprehensive care.
              </p>
            </CardContent>
          </Card>

          {/* Search and Booking Controls */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Find the Right Psychiatrist
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <Input
                    placeholder="Search by name or specialty..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Specialty</label>
                  <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialty" />
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
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : 'Select date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Consultation Type</label>
                  <Select value={consultationType} onValueChange={setConsultationType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="In-Person">In-Person</SelectItem>
                      <SelectItem value="Video Call">Video Call</SelectItem>
                      <SelectItem value="Phone Consultation">Phone Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="text-sm font-medium mb-2 block">Preferred Time</label>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2">
                  {timeSlots.map(time => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Psychiatrists Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredPsychiatrists.map(psychiatrist => (
              <Card key={psychiatrist.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={psychiatrist.avatar} alt={psychiatrist.name} />
                      <AvatarFallback>{psychiatrist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{psychiatrist.name}</CardTitle>
                      <p className="text-muted-foreground">{psychiatrist.title}</p>
                      <p className="text-sm text-muted-foreground">{psychiatrist.experience} experience</p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{psychiatrist.rating}</span>
                          <span className="text-sm text-muted-foreground">({psychiatrist.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">${psychiatrist.consultationFee}</p>
                      <p className="text-sm text-muted-foreground">per session</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{psychiatrist.bio}</p>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {psychiatrist.specialties.map(specialty => (
                        <Badge key={specialty} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span>{psychiatrist.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-green-500" />
                      <span>{psychiatrist.languages.join(', ')}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Available consultation types:</p>
                    <div className="flex gap-2">
                      {psychiatrist.consultationTypes.map(type => (
                        <Badge key={type} variant="outline" className="text-xs">
                          {type === 'Video Call' && <Video className="h-3 w-3 mr-1" />}
                          {type === 'Phone Consultation' && <Phone className="h-3 w-3 mr-1" />}
                          {type === 'In-Person' && <User className="h-3 w-3 mr-1" />}
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Suitable for severity levels:</p>
                    <div className="flex gap-1">
                      {psychiatrist.severity.map(level => (
                        <Badge 
                          key={level} 
                          variant={level === 'Severe' || level === 'Crisis' ? 'destructive' : 'default'}
                          className="text-xs"
                        >
                          {level}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {selectedDate && selectedTime && (
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800">
                        <Clock className="h-4 w-4 inline mr-1" />
                        Available on {format(selectedDate, 'PPP')} at {selectedTime}
                      </p>
                    </div>
                  )}
                  
                  <Button 
                    className="w-full" 
                    onClick={() => handleBookAppointment(psychiatrist)}
                    disabled={!selectedDate || !selectedTime || !consultationType}
                  >
                    Book Appointment - ${psychiatrist.consultationFee}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Notice */}
          <Card className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-700">Crisis Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-800 mb-4">
                If you're experiencing a mental health crisis or having thoughts of self-harm, 
                please seek immediate help:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="destructive" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call 988 (Suicide Prevention)
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call 911 (Emergency Services)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PsychiatristBooking;