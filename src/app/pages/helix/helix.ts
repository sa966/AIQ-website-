import { Component } from '@angular/core';
import { IMAGES } from '../../site.config';
import { CharacterScrambleDirective } from '../../shared/directives/character-scramble.directive';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-helix',
  imports: [CharacterScrambleDirective, ScrollRevealDirective],
  templateUrl: './helix.html',
  styleUrl: './helix.scss',
})
export class Helix {
  readonly images = IMAGES;

  readonly principles = [
    { value: '0', label: 'ads' },
    { value: '0', label: 'trackers' },
    { value: 'E2E', label: 'encrypted conversations' },
  ];

  readonly privacyFeatures = [
    {
      title: 'Private by default',
      body: 'End-to-end encrypted messaging and calls are designed so conversations stay between the people taking part.',
    },
    {
      title: 'Your contacts stay yours',
      body: 'Helix does not require uploading your phone book to get started. Connect with people on your terms.',
    },
    {
      title: 'You stay in control',
      body: 'Manage your account and privacy settings, with the option to delete your account from the app.',
    },
  ];

  readonly capabilities = [
    {
      title: 'Voice notes and push-to-talk',
      body: 'Send a voice message or use push-to-talk when typing is not the easiest way to communicate.',
      image: this.images.product.helixRinging,
      alt: 'Helix voice call interface',
    },
    {
      title: 'Groups for your people',
      body: 'Bring the right people together in group conversations for everyday coordination.',
      image: this.images.product.helixWelcome,
      alt: 'Helix welcome screen',
    },
    {
      title: 'Voice and video calls',
      body: 'Move from a message to a call while keeping the conversation private.',
      image: this.images.product.helixCall,
      alt: 'Helix video call screen',
    },
  ];
}
