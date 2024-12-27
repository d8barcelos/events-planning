import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async findAllWithPagination(filters: {
    title?: string;
    location?: string;
    startDate?: Date;
    endDate?: Date;
    page: number;
    pageSize: number;
  }): Promise<Event[]> {
    const { title, location, startDate, endDate, page, pageSize } = filters;
    const queryBuilder = this.eventRepository.createQueryBuilder('event');

    if (title) {
      queryBuilder.andWhere('event.title LIKE :title', { title: `%${title}%` });
    }

    if (location) {
      queryBuilder.andWhere('event.location LIKE :location', { location: `%${location}%` });
    }

    if (startDate) {
      queryBuilder.andWhere('event.date >= :startDate', { startDate });
    }

    if (endDate) {
      queryBuilder.andWhere('event.date <= :endDate', { endDate });
    }

    // Paginação
    queryBuilder.skip((page - 1) * pageSize).take(pageSize);

    return queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne({ where: { id } });
  }

  async create(event: Partial<Event>): Promise<Event> {
    const newEvent = this.eventRepository.create(event);
    return this.eventRepository.save(newEvent);
  }

  async update(id: number, event: Partial<Event>): Promise<Event> {
    await this.eventRepository.update(id, event);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}


