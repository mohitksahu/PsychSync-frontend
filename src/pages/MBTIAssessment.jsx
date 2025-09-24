import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Progress } from '../components/ui/progress';
import { ArrowLeft, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const MBTIAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    // Extraversion vs Introversion
    { text: "At a party, you:", category: "EI", options: ["Talk to many people", "Talk to a few close friends"] },
    { text: "You prefer to:", category: "EI", options: ["Work in a team", "Work alone"] },
    { text: "After a long week, you:", category: "EI", options: ["Go out with friends", "Stay home and relax"] },
    { text: "In social situations, you:", category: "EI", options: ["Feel energized", "Feel drained"] },
    { text: "You tend to:", category: "EI", options: ["Think out loud", "Think before speaking"] },
    
    // Sensing vs Intuition
    { text: "You focus more on:", category: "SN", options: ["Details and facts", "The big picture"] },
    { text: "You prefer:", category: "SN", options: ["Practical solutions", "Creative possibilities"] },
    { text: "When learning, you:", category: "SN", options: ["Start with examples", "Start with concepts"] },
    { text: "You're more interested in:", category: "SN", options: ["What is", "What could be"] },
    { text: "You trust:", category: "SN", options: ["Experience", "Inspiration"] },
    
    // Thinking vs Feeling
    { text: "When making decisions, you:", category: "TF", options: ["Analyze pros and cons", "Consider people's feelings"] },
    { text: "You value:", category: "TF", options: ["Logic and fairness", "Harmony and compassion"] },
    { text: "In arguments, you:", category: "TF", options: ["Remain objective", "Consider everyone's feelings"] },
    { text: "You're more motivated by:", category: "TF", options: ["Achievement", "Appreciation"] },
    { text: "When criticized, you:", category: "TF", options: ["Want specific feedback", "Need emotional support"] },
    
    // Judging vs Perceiving
    { text: "You prefer:", category: "JP", options: ["Planned activities", "Spontaneous activities"] },
    { text: "Your workspace is:", category: "JP", options: ["Organized and tidy", "Flexible and adaptable"] },
    { text: "You like to:", category: "JP", options: ["Finish projects early", "Work close to deadlines"] },
    { text: "You're more comfortable with:", category: "JP", options: ["Structure and routine", "Flexibility and change"] },
    { text: "When traveling, you:", category: "JP", options: ["Plan everything in advance", "Go with the flow"] }
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
    const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    
    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer !== undefined) {
        const category = question.category;
        if (category === "EI") {
          if (answer === 0) scores.E++; else scores.I++;
        } else if (category === "SN") {
          if (answer === 0) scores.S++; else scores.N++;
        } else if (category === "TF") {
          if (answer === 0) scores.T++; else scores.F++;
        } else if (category === "JP") {
          if (answer === 0) scores.J++; else scores.P++;
        }
      }
    });

    const type = 
      (scores.E > scores.I ? 'E' : 'I') +
      (scores.S > scores.N ? 'S' : 'N') +
      (scores.T > scores.F ? 'T' : 'F') +
      (scores.J > scores.P ? 'J' : 'P');

    setShowResults({ type, scores });
  };

  const getPersonalityDescription = (type) => {
    const descriptions = {
      'INTJ': {
        title: 'The Architect',
        description: 'Imaginative and strategic thinkers, with a plan for everything.',
        strengths: ['Strategic thinking', 'Independence', 'Determination', 'Long-term vision'],
        challenges: ['Social interaction', 'Expressing emotions', 'Dealing with routine', 'Criticism sensitivity']
      },
      'INTP': {
        title: 'The Thinker', 
        description: 'Innovative inventors with an unquenchable thirst for knowledge.',
        strengths: ['Logical analysis', 'Creativity', 'Objectivity', 'Problem-solving'],
        challenges: ['Procrastination', 'Social situations', 'Following rules', 'Practical matters']
      },
      'ENTJ': {
        title: 'The Commander',
        description: 'Bold, imaginative and strong-willed leaders.',
        strengths: ['Leadership', 'Strategic planning', 'Efficiency', 'Confidence'],
        challenges: ['Impatience', 'Emotional expression', 'Relaxation', 'Detail work']
      },
      'ENTP': {
        title: 'The Debater',
        description: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
        strengths: ['Innovation', 'Enthusiasm', 'Adaptability', 'Communication'],
        challenges: ['Follow-through', 'Routine tasks', 'Organization', 'Emotional needs']
      },
      'INFJ': {
        title: 'The Advocate',
        description: 'Quiet and mystical, yet very inspiring and tireless idealists.',
        strengths: ['Empathy', 'Creativity', 'Insight', 'Determination'],
        challenges: ['Perfectionism', 'Burnout', 'Conflict avoidance', 'Overthinking']
      },
      'INFP': {
        title: 'The Mediator',
        description: 'Poetic, kind and altruistic people, always eager to help a good cause.',
        strengths: ['Empathy', 'Creativity', 'Authenticity', 'Open-mindedness'],
        challenges: ['Criticism sensitivity', 'Procrastination', 'Self-doubt', 'Practical matters']
      },
      'ENFJ': {
        title: 'The Protagonist',
        description: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
        strengths: ['Leadership', 'Communication', 'Empathy', 'Altruism'],
        challenges: ['Self-neglect', 'Overthinking', 'Intensity', 'Decision difficulty']
      },
      'ENFP': {
        title: 'The Campaigner',
        description: 'Enthusiastic, creative and sociable free spirits.',
        strengths: ['Enthusiasm', 'Creativity', 'Social skills', 'Positivity'],
        challenges: ['Focus', 'Organization', 'Stress management', 'Routine tasks']
      },
      'ISTJ': {
        title: 'The Logistician',
        description: 'Practical and fact-minded, reliable and responsible.',
        strengths: ['Reliability', 'Organization', 'Loyalty', 'Hard work'],
        challenges: ['Change adaptation', 'Emotional expression', 'Risk-taking', 'Innovation']
      },
      'ISFJ': {
        title: 'The Protector',
        description: 'Warm-hearted and dedicated, always ready to protect their loved ones.',
        strengths: ['Compassion', 'Reliability', 'Observation', 'Loyalty'],
        challenges: ['Self-advocacy', 'Change resistance', 'Burnout', 'Conflict']
      },
      'ESTJ': {
        title: 'The Executive',
        description: 'Excellent administrators, unsurpassed at managing things or people.',
        strengths: ['Leadership', 'Organization', 'Dedication', 'Strong-willed'],
        challenges: ['Flexibility', 'Emotional expression', 'Relaxation', 'Innovation']
      },
      'ESFJ': {
        title: 'The Consul',
        description: 'Extraordinarily caring, social and popular people, always eager to help.',
        strengths: ['Social skills', 'Loyalty', 'Practical support', 'Organization'],
        challenges: ['Criticism sensitivity', 'Self-neglect', 'Inflexibility', 'Stress']
      },
      'ISTP': {
        title: 'The Virtuoso',
        description: 'Bold and practical experimenters, masters of all kinds of tools.',
        strengths: ['Practical skills', 'Flexibility', 'Crisis management', 'Efficiency'],
        challenges: ['Long-term commitment', 'Emotional expression', 'Planning', 'Social situations']
      },
      'ISFP': {
        title: 'The Adventurer',
        description: 'Flexible and charming artists, always ready to explore new possibilities.',
        strengths: ['Creativity', 'Flexibility', 'Passion', 'Loyalty'],
        challenges: ['Planning', 'Criticism', 'Conflict', 'Self-promotion']
      },
      'ESTP': {
        title: 'The Entrepreneur',
        description: 'Smart, energetic and perceptive people, truly enjoy living on the edge.',
        strengths: ['Adaptability', 'Practicality', 'Social skills', 'Energy'],
        challenges: ['Long-term planning', 'Theory', 'Sensitivity', 'Structure']
      },
      'ESFP': {
        title: 'The Entertainer',
        description: 'Spontaneous, energetic and enthusiastic people - life is never boring.',
        strengths: ['Enthusiasm', 'Social skills', 'Practicality', 'Flexibility'],
        challenges: ['Long-term focus', 'Criticism', 'Conflict', 'Abstract concepts']
      }
    };
    
    return descriptions[type] || {
      title: 'Unique Personality',
      description: 'A complex and interesting personality type.',
      strengths: ['Adaptability', 'Problem-solving', 'Communication', 'Creativity'],
      challenges: ['Finding balance', 'Managing stress', 'Decision making', 'Time management']
    };
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const personality = getPersonalityDescription(showResults.type);

    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="h-6 w-6 text-purple-500" />
                <h1 className="text-3xl font-bold">Your MBTI Personality Type</h1>
              </div>
            </div>

            <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-center text-3xl font-bold text-purple-700">
                  {showResults.type}
                </CardTitle>
                <CardDescription className="text-center text-xl font-semibold">
                  {personality.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg text-muted-foreground">
                  {personality.description}
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Your Strengths</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {personality.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-orange-600">Areas for Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {personality.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How This Helps Your Mental Health Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Understanding your personality type helps our AI therapist provide more personalized guidance:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Tailored coping strategies that match your natural preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Communication style that resonates with your personality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Social and self-care recommendations that fit your type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Better understanding of your stress triggers and motivations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <h3 className="font-semibold mb-2">Personalized Chat</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get advice tailored to your personality type
                    </p>
                    <Link to="/chat">
                      <Button className="w-full">Start Personalized Chat</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h3 className="font-semibold mb-2">Type-Based Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with others who share your personality type
                    </p>
                    <Link to="/peer-support">
                      <Button variant="outline" className="w-full">Find Similar Types</Button>
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
              <Users className="h-6 w-6 text-purple-500" />
              <h1 className="text-3xl font-bold">MBTI Personality Assessment</h1>
            </div>
            <p className="text-muted-foreground">
              Discover your personality type to receive more personalized mental health guidance.
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
                {questions[currentQuestion].text}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup 
                value={answers[currentQuestion]?.toString() || ""} 
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
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

export default MBTIAssessment;