import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Progress } from '../components/ui/progress';
import { ArrowLeft, ArrowRight, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const GHQAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    "Been able to concentrate on whatever you're doing",
    "Lost much sleep over worry",
    "Felt that you were playing a useful part in things",
    "Felt capable of making decisions about things",
    "Felt constantly under strain",
    "Felt you couldn't overcome your difficulties",
    "Been able to enjoy your normal day-to-day activities",
    "Been able to face up to problems",
    "Been feeling unhappy or depressed",
    "Been losing confidence in yourself",
    "Been thinking of yourself as a worthless person",
    "Been feeling reasonably happy, all things considered"
  ];

  const options = [
    { value: 0, label: "Better than usual" },
    { value: 1, label: "Same as usual" },
    { value: 2, label: "Less than usual" },
    { value: 3, label: "Much less than usual" }
  ];

  const reverseScoreQuestions = [0, 2, 3, 6, 7, 11]; // Questions that need reverse scoring

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
    let totalScore = 0;
    Object.entries(answers).forEach(([questionIndex, score]) => {
      const index = parseInt(questionIndex);
      if (reverseScoreQuestions.includes(index)) {
        // Reverse scoring for positive questions
        totalScore += (3 - score);
      } else {
        totalScore += score;
      }
    });
    setShowResults({ totalScore, answers });
  };

  const getSeverityLevel = (score) => {
    if (score <= 15) return { level: "Normal", color: "text-green-600", bg: "bg-green-50" };
    if (score <= 20) return { level: "Mild Distress", color: "text-yellow-600", bg: "bg-yellow-50" };
    if (score <= 25) return { level: "Moderate Distress", color: "text-orange-600", bg: "bg-orange-50" };
    return { level: "Severe Distress", color: "text-red-600", bg: "bg-red-50" };
  };

  const getRecommendations = (score) => {
    if (score <= 15) {
      return [
        "Your responses suggest good psychological well-being",
        "Continue maintaining your current lifestyle and coping strategies",
        "Keep up with regular social connections and activities",
        "Practice preventive mental health habits like exercise and mindfulness"
      ];
    } else if (score <= 20) {
      return [
        "You may be experiencing mild psychological distress",
        "Consider stress management techniques and self-care practices",
        "Try to identify and address sources of stress in your life",
        "Consider talking to friends, family, or a counselor about your concerns"
      ];
    } else if (score <= 25) {
      return [
        "Your responses suggest moderate psychological distress",
        "We recommend speaking with a mental health professional",
        "Consider counseling to develop better coping strategies",
        "Connect with our support resources and peer volunteers"
      ];
    } else {
      return [
        "Your responses indicate significant psychological distress",
        "Please consider seeking immediate professional mental health support",
        "Contact our crisis support resources if you need immediate help",
        "Schedule an appointment with a mental health professional through our platform"
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
                <Brain className="h-6 w-6 text-purple-500" />
                <h1 className="text-3xl font-bold">GHQ Assessment Results</h1>
              </div>
            </div>

            <Card className={`mb-8 ${severity.bg} border-2`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your Psychological Distress Level</span>
                  <span className={`text-2xl font-bold ${severity.color}`}>
                    {showResults.totalScore}/36
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className={`inline-block px-4 py-2 rounded-lg ${severity.bg} ${severity.color} font-semibold text-lg border`}>
                    {severity.level}
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Based on your responses to the General Health Questionnaire (GHQ-12)
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
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
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
                    <Brain className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <h3 className="font-semibold mb-2">Wellness Chat</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get personalized mental wellness strategies
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
                    <Brain className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h3 className="font-semibold mb-2">Support Network</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with trained volunteers and mentors
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
              <Brain className="h-6 w-6 text-purple-500" />
              <h1 className="text-3xl font-bold">GHQ General Health Assessment</h1>
            </div>
            <p className="text-muted-foreground">
              We want to know how your health has been in general over the past few weeks.
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
                Have you recently {questions[currentQuestion]}?
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

export default GHQAssessment;