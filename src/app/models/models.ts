export interface QuestionAnswerMongoFE {
    AnswerId: string
    Title: string
    Description: string
    CreatedAt: Date
    UpdatedAt?: Date
    CreatedBy: CreatedByMongoFE
}

export interface QuestionMongoFE {
    QuestionId: string
    Title: string
    Description: string
    CreatedAt: Date
    UpdatedAt?: Date
    CreatedBy: CreatedByMongoFE
    Tags: QuestionTagMongoFE[]
    Answers: QuestionAnswerMongoFE[]
}

export interface CreatedByMongoFE {
    UserId: string
    Name: string
    Email: string
}

export interface QuestionTagMongoFE {
    TagId: string
    Name: string
}