import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Progress } from '../components/ui/progress';
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const GAD7Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it is hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid, as if something awful might happen"
  ];

  const options = [
    { value: 0, label: "Not at all" },
    { value: 1, label: "Several days" },
    { value: 2, label: "More than half the days" },
    { value: 3, label: "Nearly every day" }
  ];

  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion]: parseInt(value)
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    setShowResults({ totalScore, answers });
  };

  const getSeverityLevel = (score) => {
    if (score <= 4) return { level: "Minimal", color: "text-green-600", bg: "bg-green-50" };
    if (score <= 9) return { level: "Mild", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (score <= 14) return { level: "Moderate", color: "text-orange-600", bg: "bg-orange-50" };
    return { level: "Severe", color: "text-red-600", bg: "bg-red-50" };
  };

  const getRecommendations = (score) => {
    if (score <= 4) {
      return [
        "Your responses suggest minimal anxiety symptoms",
        "Continue practicing relaxation techniques",
        "Maintain regular exercise and mindfulness practices",
        "Keep up with healthy sleep and nutrition habits"
      ];
    } else if (score <= 9) {
      return [
        "You may be experiencing mild anxiety symptoms",
        "Try deep breathing exercises and meditation",
        "Consider talking to a counselor about stress management",
        "Monitor your symptoms and practice self-care"
      ];
    } else if (score <= 14) {
      return [
        "Your responses suggest moderate anxiety symptoms",
        "We recommend speaking with a mental health professional",
        "Consider anxiety management therapy or counseling",
        "Connect with our peer support network for additional help"
      ];
    } else {
      return [
        "Your responses indicate severe anxiety symptoms",
        "Please consider immediate professional mental health support",
        "Contact our crisis support resources if needed",
        "Schedule an appointment with a psychiatrist through our platform"
      ];
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const severity = getSeverityLevel(showResults.totalScore);
    const recommendations = getRecommendations(showResults.totalScore);

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-blue-500" />
                <h1 className="text-3xl font-bold">GAD-7 Assessment Results</h1>
              </div>
            </div>

            <Card className={`mb-8 ${severity.bg} border-2`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your Anxiety Severity Level</span>
                  <span className={`text-2xl font-bold ${severity.color}`}>
                    {showResults.totalScore}/21
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className={`inline-block px-4 py-2 rounded-lg ${severity.bg} ${severity.color} font-semibold text-lg border`}>
                    {severity.level} Anxiety
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Based on your responses to the GAD-7 questionnaire
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>
                  Based on your assessment results, here are our personalized recommendations:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h3 className="font-semibold mb-2">Anxiety Management Chat</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get personalized anxiety coping strategies
                    </p>
                    <Link to="/chat">
                      <Button className="w-full">Start Chat</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h3 className="font-semibold mb-2">Peer Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with others who understand anxiety
                    </p>
                    <Link to="/peer-support">
                      <Button variant="outline" className="w-full">Find Support</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Link to="/assessments">
                <Button variant="outline">Back to Assessments</Button>
              </Link>
              <Button onClick={() => window.print()}>
                Download Results
              </Button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-blue-500" />
              <h1 className="text-3xl font-bold">GAD-7 Anxiety Assessment</h1>
            </div>
            <p className="text-muted-foreground">
              Over the last 2 weeks, how often have you been bothered by the following problems?
            </p>
          </div>

          {/* Progress */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </CardContent>
          </Card>

          {/* Question Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">
                {currentQuestion + 1}. {questions[currentQuestion]}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={answers[currentQuestion]?.toString() || ""} 
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value.toString()} id={`option-${option.value}`} />
                    <Label htmlFor={`option-${option.value}`} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevQuestion} 
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <Button 
              onClick={nextQuestion} 
              disabled={answers[currentQuestion] === undefined}
            >
              {currentQuestion === questions.length - 1 ? 'View Results' : 'Next'}
              {currentQuestion !== questions.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GAD7Assessment;