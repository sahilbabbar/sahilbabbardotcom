import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { BehaviorSubject } from 'rxjs';

interface Job {
    title: string;
    company: string;
    logo: string;
    unit: string;
    duration: string;
    brief: string;
    details?: string[];
    recognition?: JobAward[];
    otherPositions?: Job;
}

interface JobAward {
    title: string;
    date: string;
    description: string;
}

interface Skill {
    name: string;
    logo: string;
}

interface Education {
    university: string;
    degree: string;
    logo: string;
    duration: string;
    brief: string;
    coursework: string;
    gpa: number;
}

@Component({
    selector: 'sb-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    intro = new BehaviorSubject<any[] | undefined>(undefined);

    skills = new BehaviorSubject<Skill[] | undefined>(undefined);

    jobs = new BehaviorSubject<Job[] | undefined>(undefined);

    volunteering = new BehaviorSubject<Job[] | undefined>(undefined);

    education = new BehaviorSubject<Education[] | undefined>(undefined);

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.dataService.getAboutData().subscribe((data) => {
            this.intro.next(data[0]);
            this.skills.next(data[1]);
            this.jobs.next(data[2]);
            this.education.next(data[3]);
            this.volunteering.next(data[4]);
        });
    }
}
