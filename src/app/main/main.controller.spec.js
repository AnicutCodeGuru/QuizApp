(function() {
    'use strict';

    describe('controllers', function() {
        var vm;
        beforeEach(module('assignment'));
        beforeEach(inject(function(_$controller_) {
            vm = _$controller_('MainController');
            vm.model.questions = [{
                "text": "This is the first question",
                "options": ["answer1", "answer2", "answer3", "answer4"],
                "answer": 2
            }, {
                "text": "This is the second question",
                "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
                "answer": 1
            }, {
                "text": "This is the third question",
                "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
                "answer": 3
            }, {
                "text": "This is the fourth question",
                "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
                "answer": 0
            }, {
                "text": "This is the fifth question",
                "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
                "answer": 0
            }, {
                "text": "This is the sixth question",
                "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
                "answer": 3
            }, {
                "text": "This is the seventh question",
                "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
                "answer": 3
            }, {
                "text": "This is the eighth question",
                "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
                "answer": 2
            }];
            vm.methods.upDateQuestionModel();
        }));

        it('It should check if the question is set to 0', function() {
            expect(vm.model.question).toEqual(0);
        });

        it('It should check if the selected answer is updated or not.', function() {
            vm.methods.setSelected(2);
            expect(vm.model.questions[vm.model.question].selectedAns).toEqual(2);
        });

        it('It should check if navigating to next question or not.', function() {
            vm.methods.nextQuestion();
            expect(vm.model.question).toEqual(1);
        });
        it('It should set the show results flag to true', function() {
            vm.methods.ShowResults();
            expect(vm.model.showResults).toEqual(true);
        });

        it('It should check if we are getting proper correct answers count or not', function() {
            vm.methods.setSelected(2);
            expect(vm.methods.getCorrectAnswers()).toEqual("1/8");
        });

        it('It should check if we are getting proper correct percentage or not', function() {
            vm.methods.setSelected(2);
            expect(vm.methods.getPercentage()).toEqual(13);
        });


    });
})();