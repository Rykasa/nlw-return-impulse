"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
//spies
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const SubmitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase({ create: createFeedbackSpy }, { sendMail: sendMailSpy });
//describe cria vários testes para uma funcionalidade
describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(SubmitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,jhaskajskjaskajskjaskja',
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit a feedback without type', async () => {
        await expect(SubmitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,jhaskajskjaskajskjaskja',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback without comment', async () => {
        await expect(SubmitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,jhaskajskjaskajskjaskja',
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(SubmitFeedback.execute({
            type: 'BUG',
            comment: 'ta tudo bugado',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });
});
