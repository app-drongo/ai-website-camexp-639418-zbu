'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  TrendingUp,
  Heart,
  Lightbulb
} from "lucide-react"
import { useSmartNavigation } from "@/hooks/useSmartNavigation"

const DEFAULT_ABOUT = {
  badge: "About Us",
  mainTitle: "Building the Future of",
  mainTitleHighlight: "Web Development",
  mainDescription: "We're a passionate team of developers, designers, and innovators on a mission to make web development accessible, powerful, and enjoyable for everyone.",
  storyTitle: "Our Story",
  storyParagraph1: "Founded in 2019 by a team of frustrated developers, we set out to solve a simple problem: why was building beautiful, functional websites still so complicated?",
  storyParagraph2: "After years of wrestling with complex toolchains, inconsistent designs, and endless debugging sessions, we knew there had to be a better way. So we built it.",
  storyParagraph3: "Today, we're proud to serve over 50,000 developers and businesses worldwide, helping them bring their ideas to life faster and more beautifully than ever before.",
  storyCTA: "Read Our Full Story",
  storyCTAHref: "/blog/our-story",
  quoteText: "We believe great design should be accessible to everyone, not just those with big budgets.",
  quoteAuthor: "Sarah Johnson, CEO",
  stat1Value: "2019",
  stat1Label: "Founded",
  stat2Value: "50K+",
  stat2Label: "Happy Customers",
  stat3Value: "99.9%",
  stat3Label: "Uptime",
  stat4Value: "25+",
  stat4Label: "Countries",
  valuesTitle: "Our Values",
  valuesDescription: "The principles that guide everything we do and every decision we make.",
  value1Title: "Mission Driven",
  value1Description: "We're committed to democratizing web development and making beautiful, functional websites accessible to everyone.",
  value2Title: "Innovation First",
  value2Description: "We constantly push the boundaries of what's possible, bringing cutting-edge technology to your fingertips.",
  value3Title: "Customer Obsessed",
  value3Description: "Your success is our success. We build every feature with our users' needs and goals at the center.",
  value4Title: "Global Impact",
  value4Description: "From startups to enterprises, we're helping businesses worldwide transform their digital presence.",
  teamTitle: "Meet Our Team",
  teamDescription: "The talented individuals behind our success, working together to build something amazing.",
  team1Name: "Sarah Johnson",
  team1Role: "CEO & Co-Founder",
  team1Bio: "Former VP of Product at TechCorp. 15+ years building scalable products.",
  team2Name: "Michael Chen",
  team2Role: "CTO & Co-Founder",
  team2Bio: "Ex-Google engineer. Expert in distributed systems and web performance.",
  team3Name: "Emily Rodriguez",
  team3Role: "Head of Design",
  team3Bio: "Award-winning designer with experience at top design agencies.",
  team4Name: "David Kim",
  team4Role: "VP of Engineering",
  team4Bio: "Former Meta engineer. Passionate about developer experience and tools.",
  teamCTA: "View All Team Members",
  teamCTAHref: "/team",
  testimonialQuote: "This platform has completely transformed how we approach web development. What used to take weeks now takes days, and the results are consistently beautiful.",
  testimonialAuthorName: "Jessica Davis",
  testimonialAuthorTitle: "CTO, TechStartup Inc."
} as const

type AboutProps = Partial<typeof DEFAULT_ABOUT>

export default function About(props: AboutProps) {
  const config = { ...DEFAULT_ABOUT, ...props }
  const navigate = useSmartNavigation()

  const values = [
    {
      icon: Target,
      title: config.value1Title,
      description: config.value1Description
    },
    {
      icon: Lightbulb,
      title: config.value2Title,
      description: config.value2Description
    },
    {
      icon: Heart,
      title: config.value3Title,
      description: config.value3Description
    },
    {
      icon: Globe,
      title: config.value4Title,
      description: config.value4Description
    }
  ]

  const stats = [
    { value: config.stat1Value, label: config.stat1Label, icon: Award },
    { value: config.stat2Value, label: config.stat2Label, icon: Users },
    { value: config.stat3Value, label: config.stat3Label, icon: TrendingUp },
    { value: config.stat4Value, label: config.stat4Label, icon: Globe }
  ]

  const team = [
    {
      name: config.team1Name,
      role: config.team1Role,
      image: config.team1Name.split(' ').map(n => n[0]).join(''),
      bio: config.team1Bio
    },
    {
      name: config.team2Name,
      role: config.team2Role,
      image: config.team2Name.split(' ').map(n => n[0]).join(''),
      bio: config.team2Bio
    },
    {
      name: config.team3Name,
      role: config.team3Role,
      image: config.team3Name.split(' ').map(n => n[0]).join(''),
      bio: config.team3Bio
    },
    {
      name: config.team4Name,
      role: config.team4Role,
      image: config.team4Name.split(' ').map(n => n[0]).join(''),
      bio: config.team4Bio
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              <span data-editable="storyTitle">{config.storyTitle}</span>
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p data-editable="storyParagraph1">{config.storyParagraph1}</p>
              <p data-editable="storyParagraph2">{config.storyParagraph2}</p>
              <p data-editable="storyParagraph3">{config.storyParagraph3}</p>
            </div>
            <Button 
              className="group" 
              onClick={() => navigate(config.storyCTAHref)}
              data-editable-href="storyCTAHref"
              data-href={config.storyCTAHref}
            >
              <span data-editable="storyCTA">{config.storyCTA}</span>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      <span data-editable="quoteText">{config.quoteText}</span>
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">
                      - <span data-editable="quoteAuthor">{config.quoteAuthor}</span>
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">
                    <span data-editable={`stat${index + 1}Value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stat${index + 1}Label`}>{stat.label}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span data-editable="valuesTitle">{config.valuesTitle}</span>
            </h3>
            <p className="text-muted-foreground">
              <span data-editable="valuesDescription">{config.valuesDescription}</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">
                          <span data-editable={`value${index + 1}Title`}>{value.title}</span>
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          <span data-editable={`value${index + 1}Description`}>{value.description}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span data-editable="teamTitle">{config.teamTitle}</span>
            </h3>
            <p className="text-muted-foreground">
              <span data-editable="teamDescription">{config.teamDescription}</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {team.map((member, index) => {
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {member.image}
                    </div>
                    <h4 className="font-semibold mb-1">
                      <span data-editable={`team${index + 1}Name`}>{member.name}</span>
                    </h4>
                    <p className="text-sm text-primary mb-3">
                      <span data-editable={`team${index + 1}Role`}>{member.role}</span>
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span data-editable={`team${index + 1}Bio`}>{member.bio}</span>
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex justify-center">
            <Button 
              variant="outline" 
              className="group" 
              onClick={() => navigate(config.teamCTAHref)}
              data-editable-href="teamCTAHref"
              data-href={config.teamCTAHref}
            >
              <span data-editable="teamCTA">{config.teamCTA}</span>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                <span data-editable="testimonialQuote">{config.testimonialQuote}</span>
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  {config.testimonialAuthorName.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-left">
                  <div className="font-semibold">
                    <span data-editable="testimonialAuthorName">{config.testimonialAuthorName}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable="testimonialAuthorTitle">{config.testimonialAuthorTitle}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}