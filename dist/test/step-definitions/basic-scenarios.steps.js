"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jest_cucumber_1 = require("jest-cucumber");
const rocket_1 = require("../../src/rocket");
const feature = jest_cucumber_1.loadFeature('./test/features/basic-scenarios.feature');
jest_cucumber_1.defineFeature(feature, (test) => {
    test('Launching a SpaceX rocket', ({ given, when, then }) => {
        let rocket;
        given('I am Elon Musk attempting to launch a rocket into space', () => {
            rocket = new rocket_1.Rocket();
        });
        when('I launch the rocket', () => {
            rocket.launch();
        });
        then('the rocket should end up in space', () => {
            expect(rocket.isInSpace).toBe(true);
        });
        then('the booster(s) should land back on the launch pad', () => {
            expect(rocket.boostersLanded).toBe(true);
        });
        then('nobody should doubt me ever again', () => {
            expect('people').not.toBe('haters');
        });
    });
});
//# sourceMappingURL=basic-scenarios.steps.js.map