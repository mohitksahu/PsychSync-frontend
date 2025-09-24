import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useState } from "react";

const Stories = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  
  const tags = [
    "Anxiety", "Depression", "Stress", "Academic Pressure", "Social Anxiety", 
    "Self-Discovery", "Peer Support", "Crisis Recovery", "Relationship Issues"
  ];
  
  const stories = [
    {
      id: 1,
      title: "Finding My Voice Through Anxiety",
      excerpt: "I never thought I'd be able to speak up in class, but understanding my personality type helped me work with my anxiety instead of against it.",
      tags: ["Anxiety", "Self-Discovery", "Academic Pressure"],
      timeToRead: "3 min read",
      anonymous: true
    },
    {
      id: 2,
      title: "From Crisis to Connection", 
      excerpt: "When I was at my lowest point, Psych Sync didn't just give me resources—it connected me with someone who had been exactly where I was.",
      tags: ["Crisis Recovery", "Peer Support", "Depression"],
      timeToRead: "5 min read",
      anonymous: true
    },
    {
      id: 3,
      title: "The Power of Understanding My MBTI Type",
      excerpt: "Learning I was an INFP changed everything about how I approach relationships and stress. I finally stopped trying to be someone I'm not.",
      tags: ["Self-Discovery", "Relationship Issues", "Stress"],
      timeToRead: "4 min read", 
      anonymous: true
    },
    {
      id: 4,
      title: "Academic Pressure and Finding Balance",
      excerpt: "My perfectionism was killing me. The assessment helped me see patterns I couldn't see before and connected me with coping strategies that actually work.",
      tags: ["Academic Pressure", "Stress", "Anxiety"],
      timeToRead: "4 min read",
      anonymous: true
    },
    {
      id: 5,
      title: "Social Anxiety in College",
      excerpt: "Making friends felt impossible until I understood my social patterns. Now I have a support system I never thought I'd find.",
      tags: ["Social Anxiety", "Peer Support", "Self-Discovery"],
      timeToRead: "3 min read",
      anonymous: true
    },
    {
      id: 6,
      title: "Sharing My Report with Campus Counseling",
      excerpt: "Having a detailed report to share with my counselor made such a difference. We could skip the 'getting to know you' phase and dive right into solutions.",
      tags: ["Crisis Recovery", "Academic Pressure"],
      timeToRead: "2 min read",
      anonymous: true
    }
  ];
  
  const filteredStories = selectedTag 
    ? stories.filter(story => story.tags.includes(selectedTag))
    : stories;

  return (
    <div className="min-h-screen bg-background page-transition">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up-slow">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Student Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-300">
              Real experiences from students who found their path to better mental health. 
              All stories are shared anonymously to protect privacy while inspiring others.
            </p>
          </div>

          {/* Tag Filter */}
          <div className="mb-12 animate-fade-in animate-delay-400">
            <div className="text-center mb-6">
              <p className="text-muted-foreground animate-fade-in">Filter by topic:</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className="text-sm hover-lift transition-transform animate-fade-in animate-delay-100"
              >
                All Stories
              </Button>
              {tags.map((tag, index) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={`text-sm hover-lift transition-transform animate-fade-in animate-delay-${(index+2) * 100}`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredStories.map((story, index) => (
              <Card key={story.id} className={`p-6 border-secondary/30 hover:shadow-gentle transition-all-smooth hover-float cursor-pointer animate-fade-up animate-delay-${index * 200}`}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground leading-tight animate-fade-in animate-delay-100">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground animate-fade-in animate-delay-200">
                      {story.timeToRead} • Anonymous Student
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed animate-fade-in animate-delay-300">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 animate-fade-in animate-delay-400">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-calm-blue/20 text-xs text-foreground rounded-full transition-all-smooth hover:bg-calm-blue/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full mt-4 hover-lift transition-transform animate-fade-in animate-delay-500">
                    Read Full Story
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Share Story CTA */}
          <section>
            <Card className="p-12 bg-gentle-mint/10 border-gentle-mint/30 text-center animate-fade-up-slow animate-delay-800 hover-float transition-all-smooth">
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground animate-fade-in">
                  Share Your Story
                </h2>
                <p className="text-muted-foreground leading-relaxed animate-fade-in animate-delay-200">
                  Your experience could help another student feel less alone. Share your story 
                  anonymously to inspire others on their mental health journey.
                </p>
                <div className="space-y-4 animate-fade-in animate-delay-400">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 hover-glow transition-transform">
                    Submit Your Story
                  </Button>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p className="animate-fade-in animate-delay-500">✓ Completely anonymous</p>
                    <p className="animate-fade-in animate-delay-600">✓ Reviewed before publishing</p>
                    <p className="animate-fade-in animate-delay-700">✓ Help others feel less alone</p>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
