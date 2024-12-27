import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Event } from './event.entity';
import { EventService } from './event.service';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Query(() => [Event], { name: 'events' })
  findAll(
    @Args('title', { nullable: true }) title: string,
    @Args('location', { nullable: true }) location: string,
    @Args('startDate', { type: () => Date, nullable: true }) startDate: Date,
    @Args('endDate', { type: () => Date, nullable: true }) endDate: Date,
    @Args('page', { type: () => Number, nullable: true, defaultValue: 1 }) page: number,
    @Args('pageSize', { type: () => Number, nullable: true, defaultValue: 10 }) pageSize: number,
  ): Promise<Event[]> {
    return this.eventService.findAllWithPagination({ title, location, startDate, endDate, page, pageSize });
  }

  @Query(() => Event, { name: 'event' })
  findOne(@Args('id') id: number): Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Mutation(() => Event)
  createEvent(
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('date') date: Date,
    @Args('location') location: string,
  ): Promise<Event> {
    return this.eventService.create({ title, description, date, location });
  }

  @Mutation(() => Event)
  updateEvent(
    @Args('id') id: number,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('date') date: Date,
    @Args('location') location: string,
  ): Promise<Event> {
    return this.eventService.update(id, { title, description, date, location });
  }

  @Mutation(() => Boolean)
  removeEvent(@Args('id') id: number): Promise<boolean> {
    return this.eventService
      .remove(id)
      .then(() => true)
      .catch(() => false);
  }
}
