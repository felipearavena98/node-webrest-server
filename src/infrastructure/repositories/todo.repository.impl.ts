import { CreateTodoDto, TodoEntity, TodoRepository, UpdateTodoDto } from "../../domain";

export class TodoRepositoryImpl implements TodoRepository{

    constructor(
        private readonly datasource: TodoRepository
    ) {}

    async create(createTodoDto: CreateTodoDto): Promise<TodoEntity> {
        return this.datasource.create(createTodoDto);
    }
    async getAll(): Promise<TodoEntity[]> {
        return this.datasource.getAll();
    }
    async findById(id: number): Promise<TodoEntity> {
        return this.datasource.findById(id);
    }
    async updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntity> {
        return this.datasource.updateById(updateTodoDto);
    }
    async deleteById(id: number): Promise<TodoEntity> {
        return this.datasource.deleteById(id);
    }
}