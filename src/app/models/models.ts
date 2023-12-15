
export interface QuestionDto {
    _id: { $oid: string }
    questionId: number
    questionIdAccess: { $binary: { base64: string } } // guid
    title: string
    description: string
    correctAnswerId: number | null
    correctAnswer: AnswerDto | null
    tags: TagDto[]
    answers: AnswerDto[]
}

export interface TagDto {
    _id: { $oid: string }
    tagId: number
    name: string
    questions: QuestionDto[]
}

export interface AnswerDto {
    _id: { $oid: string }
    answerId: number
    question: QuestionDto
    questionId: number
    correctAnswerQuestion?: QuestionDto | null
    correctAnswerQuestionId?: number | null
    title: string
    description: string
}