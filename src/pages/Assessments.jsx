import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Brain, Heart, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Assessments = () => {
  const [completedTests, setCompletedTests] = useState([]);

  const assessments = [
    {
      id: 'phq9',
      title: 'PHQ-9 Depression Assessment',
      description: 'Patient Health Questionnaire for depression screening',
      icon: Heart,
      required: true,
      estimatedTime: '5-7 minutes',
      questions: 9,
      purpose: 'Measures severity of depression symptoms over the past two weeks',
      path: '/assessment/phq9'
    },
    {
      id: 'gad7',
      title: 'GAD-7 Anxiety Assessment',
      description: 'Generalized Anxiety Disorder 7-item scale',
      icon: Shield,
      required: true,
      estimatedTime: '3-5 minutes',
      questions: 7,
      purpose: 'Evaluates anxiety levels and generalized anxiety disorder symptoms',
      path: '/assessment/gad7'
    },
    {
      id: 'ghq',
      title: 'GHQ General Health Assessment',
      description: 'General Health Questionnaire for psychological distress',
      icon: Brain,
      required: true,
      estimatedTime: '8-10 minutes',
      questions: 12,
      purpose: 'Screens for general psychological distress and mental health issues',
      path: '/assessment/ghq'
    },
    {
      id: 'mbti',
      title: 'MBTI Personality Assessment',
      description: 'Myers-Briggs Type Indicator for personality insights',
      icon: Users,
      required: false,
      estimatedTime: '15-20 minutes',
      questions: 60,
      purpose: 'Identifies personality type for personalized guidance and therapy',
      path: '/assessment/mbti'
    }
  ];

  const requiredTests = assessments.filter(test => test.required);
  const completedRequired = requiredTests.filter(test => completedTests.includes(test.id));
  const progressPercentage = (completedRequired.length / requiredTests.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Mental Health Assessment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete our comprehensive mental health assessments to receive personalized insights 
              and connect with appropriate support resources.
            </p>
          </div>

          {/* Progress Section */}
          <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Assessment Progress
              </CardTitle>
              <CardDescription>
                Complete all required assessments to unlock personalized features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Required Tests Completed</span>
                  <span>{completedRequired.length} of {requiredTests.length}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                {progressPercentage === 100 && (
                  <div className="flex items-center gap-2 text-green-600">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm font-medium">All required assessments completed!</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Assessment Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {assessments.map((assessment) => {
              const Icon = assessment.icon;
              const isCompleted = completedTests.includes(assessment.id);
              
              return (
                <Card key={assessment.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          assessment.required ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{assessment.title}</CardTitle>
                          <div className="flex gap-2 mt-1">
                            {assessment.required ? (
                              <Badge variant="default" className="text-xs">Required</Badge>
                            ) : (
                              <Badge variant="secondary" className="text-xs">Optional</Badge>
                            )}
                            {isCompleted && (
                              <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                                Completed
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-2">
                      {assessment.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {assessment.purpose}
                      </p>
                      
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{assessment.questions} questions</span>
                        <span>{assessment.estimatedTime}</span>
                      </div>
                      
                      <Link to={assessment.path}>
                        <Button 
                          className="w-full" 
                          variant={isCompleted ? "outline" : "default"}
                        >
                          {isCompleted ? 'Retake Assessment' : 'Start Assessment'}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Information Section */}
          <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-center">Why Take These Assessments?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Brain className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <h3 className="font-medium mb-2">Personalized Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get detailed reports about your mental health status and personality type
                  </p>
                </div>
                <div>
                  <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
                  <h3 className="font-medium mb-2">Tailored Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive customized recommendations and connect with appropriate resources
                  </p>
                </div>
                <div>
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <h3 className="font-medium mb-2">Professional Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Access our AI therapist and connect with trained volunteers or professionals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assessments;