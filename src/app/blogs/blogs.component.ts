import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../shared/services/blogs.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  allBlogs: any[] = []; // Full list of blogs from the API
  paginatedBlogs: any[] = []; // Blogs for the current page
  currentPage: number = 1; // Current active page
  blogsPerPage: number = 9; // Number of blogs per page
  totalPages: number = 0; // Total number of pages
  pages: number[] = []; // Array of page numbers

  constructor(
    private blogsService: BlogsService,
    private loader: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getAllBlogs() {
    this.loader.show();

    this.blogsService.getAllBlogs().subscribe({
      next: (res) => {
        this.allBlogs = res; // Assign API response
        this.totalPages = Math.ceil(this.allBlogs.length / this.blogsPerPage); // Calculate pages
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1); // Generate page numbers
        this.setPaginatedBlogs(); // Update paginated blogs
        this.loader.hide();
      },
      error: (err) => {
        console.error('Error fetching blogs:', err);
        this.loader.hide();
      },
    });
  }

  setPaginatedBlogs() {
    const startIndex = (this.currentPage - 1) * this.blogsPerPage;
    const endIndex = startIndex + this.blogsPerPage;
    this.paginatedBlogs = this.allBlogs.slice(startIndex, endIndex); // Slice blogs for current page
    console.log(this.paginatedBlogs);
  }

  changePage(page: number) {
    this.loader.show();
    if (page < 1 || page > this.totalPages) return; // Validate page number
    this.currentPage = page;
    this.setPaginatedBlogs(); // Update blogs for new page
    setTimeout(() => {
      this.loader.hide();
    }, 2000);
  }
}
