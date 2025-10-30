'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Camera, FileText, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRICING = {
  badge: 'Simple Pricing',
  mainTitle: 'Choose Your',
  mainTitleHighlight: 'CamExp Plan',
  mainDescription:
    'Start capturing and organizing your business expenses today. No setup fees, no long-term contracts. Scale as your business grows.',
  billingMonthly: 'Monthly',
  billingAnnual: 'Annual',
  billingAnnualBadge: 'Save 25%',
  plan1Name: 'Starter',
  plan1Description: 'Perfect for solo entrepreneurs and freelancers',
  plan1Price: 'Free',
  plan1CTA: 'Start Free Forever',
  plan1CTAHref: '/signup',
  plan2Name: 'Business',
  plan2Description: 'Ideal for small to medium businesses',
  plan2Price: '$19',
  plan2Period: '/month',
  plan2Badge: 'Most Popular',
  plan2CTA: 'Start Free Trial',
  plan2CTAHref: '/signup',
  plan2Trial: '14-day free trial • No credit card required',
  plan3Name: 'Enterprise',
  plan3Description: 'For larger teams with advanced needs',
  plan3Price: 'Custom',
  plan3Badge: 'Contact Sales',
  plan3CTA: 'Schedule Demo',
  plan3CTAHref: '/demo',
  bottomTitle: 'Ready to streamline your expense tracking?',
  bottomDescription:
    'Join thousands of small businesses who trust CamExp to capture, organize, and manage their expenses effortlessly. See how much time you can save.',
  bottomCTA: 'See CamExp in Action',
  bottomCTAHref: '/demo',
} as const;

type PricingProps = Partial<typeof DEFAULT_PRICING>;

export default function Pricing(props: PricingProps) {
  const config = { ...DEFAULT_PRICING, ...props };
  const navigate = useSmartNavigation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: config.plan1Name,
      description: config.plan1Description,
      price: config.plan1Price,
      period: '',
      badge: null,
      features: [
        'Up to 50 expense captures/month',
        'Basic document scanning',
        'Mobile & web access',
        'PDF export',
        'Email support',
        '1GB cloud storage',
      ],
      cta: config.plan1CTA,
      ctaHref: config.plan1CTAHref,
      popular: false,
      icon: <Camera className="size-5 text-primary" />,
    },
    {
      name: config.plan2Name,
      description: config.plan2Description,
      price: billingCycle === 'annual' ? '$15' : config.plan2Price,
      period: config.plan2Period,
      badge: config.plan2Badge,
      features: [
        'Unlimited expense captures',
        'Advanced OCR & auto-categorization',
        'Receipt & invoice scanning',
        'Multi-user team access (up to 10)',
        'Accounting software integration',
        'Priority support',
        '50GB cloud storage',
        'Custom expense categories',
        'Expense reports & analytics',
      ],
      cta: config.plan2CTA,
      ctaHref: config.plan2CTAHref,
      popular: true,
      icon: <FileText className="size-5 text-primary" />,
    },
    {
      name: config.plan3Name,
      description: config.plan3Description,
      price: config.plan3Price,
      period: '',
      badge: config.plan3Badge,
      features: [
        'Everything in Business plan',
        'Unlimited team members',
        'Advanced workflow automation',
        'Custom integrations & API',
        'Dedicated account manager',
        '24/7 phone support',
        'Unlimited cloud storage',
        'Advanced security & compliance',
        'Custom training & onboarding',
      ],
      cta: config.plan3CTA,
      ctaHref: config.plan3CTAHref,
      popular: false,
      icon: <Smartphone className="size-5 text-primary" />,
    },
  ];

  return (
    <section className="py-24 bg-background">
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
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all',
                billingCycle === 'monthly'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingMonthly">{config.billingMonthly}</span>
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2',
                billingCycle === 'annual'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <span data-editable="billingAnnual">{config.billingAnnual}</span>
              <Badge variant="secondary" className="text-xs">
                <span data-editable="billingAnnualBadge">{config.billingAnnualBadge}</span>
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 lg:scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
                    <Star className="size-3 mr-1 fill-current" />
                    <span data-editable="plan2Badge">{plan.badge}</span>
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              )}

              <CardHeader className={cn('relative text-center pb-8', plan.popular && 'pt-10')}>
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    <span data-editable="plan3Badge">{plan.badge}</span>
                  </Badge>
                )}

                <div className="flex justify-center mb-4">{plan.icon}</div>

                <CardTitle className="text-2xl mb-2">
                  <span data-editable={`plan${index + 1}Name`}>{plan.name}</span>
                </CardTitle>
                <CardDescription className="text-base mb-6">
                  <span data-editable={`plan${index + 1}Description`}>{plan.description}</span>
                </CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">
                    <span data-editable={`plan${index + 1}Price`}>{plan.price}</span>
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">
                      <span data-editable="plan2Period">{plan.period}</span>
                    </span>
                  )}
                </div>
                {billingCycle === 'annual' && plan.name === config.plan2Name && (
                  <p className="text-sm text-primary mt-2">Save $48/year</p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular && 'bg-primary hover:bg-primary/90'
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => navigate(plan.ctaHref)}
                  data-editable-href={`plan${index + 1}CTAHref`}
                  data-href={plan.ctaHref}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  <span data-editable={`plan${index + 1}CTA`}>{plan.cta}</span>
                </Button>

                {plan.name === config.plan2Name && (
                  <p className="text-center text-sm text-muted-foreground">
                    <span data-editable="plan2Trial">{config.plan2Trial}</span>
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              <span data-editable="bottomTitle">{config.bottomTitle}</span>
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              <span data-editable="bottomDescription">{config.bottomDescription}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/signup')}
                data-editable-href="signupCTAHref"
                data-href="/signup"
                className="px-8"
              >
                <Camera className="size-4 mr-2" />
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate(config.bottomCTAHref)}
                data-editable-href="bottomCTAHref"
                data-href={config.bottomCTAHref}
                className="px-8"
              >
                <span data-editable="bottomCTA">{config.bottomCTA}</span>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Cancel anytime • 14-day free trial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
