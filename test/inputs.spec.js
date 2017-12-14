import { fetchFormsWithInputs } from "../source/inputs.js";

describe("inputs", function() {
    describe("fetchFormsWithInputs", function() {
        beforeEach(function() {
            this.forms = [];
            this.queryEl = {
                getElementsByTagName: sinon.stub().returns(this.forms)
            };
        });

        it("fetches forms by name", function() {
            fetchFormsWithInputs(this.queryEl);
            expect(this.queryEl.getElementsByTagName.calledWithExactly("form")).to.be.true;
            expect(this.queryEl.getElementsByTagName.calledOnce).to.be.true;
        });

        it("fetches elements under form", function() {
            const fakeForm = {
                querySelectorAll: sinon.stub().returns([])
            };
            this.forms.push(fakeForm);
            fetchFormsWithInputs(this.queryEl);
            expect(fakeForm.querySelectorAll.calledThrice).to.be.true;
        });
    });
});
