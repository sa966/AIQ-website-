import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMAGES } from '../../site.config';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-geo-ai',
  imports: [RouterLink, CharacterScrambleDirective, ScrollRevealDirective],
  templateUrl: './geo-ai.html',
  styleUrl: './geo-ai.scss',
})
export class GeoAi {
  readonly images = IMAGES;
  readonly openFaq = signal<number | null>(null);

  readonly features = [
    {
      title: 'Turn imagery into insight',
      body: 'Analyze satellite imagery and geospatial data to surface useful information and patterns.',
    },
    {
      title: 'From image to understanding',
      body: 'Work with satellite imagery through an intuitive interface designed to make geospatial analysis more accessible.',
    },
    {
      title: 'Identify geographic features',
      body: 'Automatically surface physical features in imagery and help teams understand what is present across a location.',
    },
    {
      title: 'Understand spatial and temporal context',
      body: 'Explore identified features in relation to where and when they appear to support informed interpretation.',
    },
    {
      title: 'Make imagery actionable',
      body: 'Bring imagery, analysis, and location context together to help teams move from observation to decisions.',
    },
  ];

  readonly faqs = [
    {
      question: 'What is GeoAI Tools?',
      answer:
        'GeoAI Tools is geospatial intelligence software that helps teams analyze satellite imagery and geographic data.',
    },
    {
      question: 'Who is GeoAI Tools designed for?',
      answer:
        'It is designed for organizations that need to interpret satellite imagery and geospatial information for planning and operational decisions.',
    },
    {
      question: 'How can I use GeoAI Tools?',
      answer:
        'Use the platform to explore imagery, identify geographic features, and understand spatial patterns in context.',
    },
    {
      question: 'What can GeoAI Tools identify?',
      answer:
        'GeoAI Tools can help identify physical geographic features in imagery. Results depend on the source imagery and analysis task.',
    },
    {
      question: 'What does spatial and temporal accuracy mean?',
      answer:
        'It describes how precisely an observation is associated with a location and time. Accuracy depends on the available source data.',
    },
  ];

  readonly useCases = [
    'Government and public planning',
    'Infrastructure and energy',
    'Agriculture',
    'Environment and conservation',
    'Humanitarian response and disaster management',
  ];

  toggleFaq(index: number) {
    this.openFaq.update((current) => (current === index ? null : index));
  }
}
