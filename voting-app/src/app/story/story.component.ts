import { Component, OnInit } from '@angular/core';
import { Story } from '../story.service';
import { StoryService } from '../story.service';
import { NgForm } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-story',
  standalone: false,
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent implements OnInit {
  stories: Story[] = [];
  formData: Story = { storyDesc: '', storyNo: '' };
  showForm = false;
  searchPlanId: string = '';

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {
    // No loadStories by default
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onSubmit(form: NgForm): void {
    this.storyService.addStory(this.formData).subscribe({
      next: (newStory) => {
        this.stories = [newStory]; // Display new story
        form.resetForm();
        this.showForm = false;
      },
      error: (err) => console.error('Error adding story', err),
    });
  }

  searchByPlanId(): void {
    if (!this.searchPlanId.trim()) {
      this.stories = [];
      return;
    }

    this.storyService.getStoryById(this.searchPlanId).subscribe({
      next: (story) => {
        this.stories = story ? [story] : [];
      },
      error: (err) => {
        console.error('Error fetching story by Plan ID', err);
        this.stories = [];
      }
    });
  }
}