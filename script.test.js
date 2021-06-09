const { TestWatcher } = require("@jest/core");
const {translate} = require("./script.js");


// TESTS
describe("translate", () => {
    // VOWEL TESTS
    test("apple to appleway", () =>{
        // first test case
        expect(translate("apple")).toEqual("appleway");
    });
    // second test case
    test("else to elseway", () => {
        expect(translate("else")).toEqual("elseway");
    });
    test("ignore to gnoreway", () => {
        expect(translate("ignore")).toEqual("ignoreway");
    });
    test("oliver to oliverway", () => {
        expect(translate("oliver")).toEqual("oliverway");
    });
    test("umbrella to umbrellaway", () => {
        expect(translate("umbrella")).toEqual("umbrellaway");
    });
    // SINGLE CONSONANT TESTS
    test("giraffe to iraffegay", () => {
        expect(translate("giraffe")).toEqual("iraffegay");
    });
    test("taco to acotay", () => {
        expect(translate("taco")).toEqual("acotay");
    });
    // DOUBLE CONSONANT TESTS
    test("blobfish to obfishblay", () => {
        expect(translate("blobfish")).toEqual("obfishblay");
    });
    // TRIPLE CONSONANT TESTS
    test("sploosh to ooshsplay", () => {
        expect(translate("sploosh")).toEqual("ooshsplay");
    });
    // LOWERCASE TEST --- COMMENTED OUT FOR EXTENDED CHALLENGES
    // test("SarCAsM to sarcasm", () => {
    //     expect(translate("SarCAsM")).toEqual("arcasmsay");
    // });
    // KEEP CASE TEST
    test("SarCAsM to SarCAsM", () => {
        expect(translate("SarCAsM")).toEqual("arCAsMSay");
    });
    test("PlEtHorA to EtHorAPLay", () => {
        expect(translate("PlEtHorA")).toEqual("EtHorAPlay")
    });
    // ALLOW PUNCTUATION
    test("stop. to opstay.", () => {
        expect(translate("stop.")).toEqual("opstay.");
    });
    test("duck? to uckday?", () => {
        expect(translate("duck?")).toEqual("uckday?");
    });
    test("aardvark? to aardvarkway?", () => {
        expect(translate("aardvark?")).toEqual("aardvarkway?");
    });
})