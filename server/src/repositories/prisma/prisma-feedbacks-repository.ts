import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository{
    async create({ type, comment, screenshot}: FeedbackCreateData){
        await prisma.feedback.create({
        data: {
            //quando a chave tem o mesmo nome do valo pode-se reduzir assim
            type,
            comment,
            screenshot: screenshot,
        }
    })
    }
}