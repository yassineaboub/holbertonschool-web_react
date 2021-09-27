import { coursesNormalizer } from "./courses";
import { listCourses } from "../utils";
import assert from "assert";

const normalizedData = coursesNormalizer(listCourses);

describe('Courses Normalizer', () => {

    it('normalizeData has correct schema', () => {
        assert.equal(typeof normalizedData, 'object');
        assert.equal(true, normalizedData.hasOwnProperty('result'));
    });

    it('normalizedData has correct results', () => {
        const received = JSON.stringify(normalizedData.result);
        const expected = JSON.stringify([1, 2, 3]);

        assert.equal(received, expected);
    });

    it('Normalized Data correct courses ES6', () => {
        const {courses} = normalizedData.entities;
        const COURSE_ES6 = courses["1"];
        const {id, name, credit} = COURSE_ES6;

        assert.equal(id, 1);
        assert.equal(name, "ES6");
        assert.equal(credit, 60);
    });

    it('Correct course Webpack', () => {
        const {courses} = normalizedData.entities;
        const COURSE_WEBPACK = courses["2"];
        const {id, name, credit} = COURSE_WEBPACK;

        assert.equal(id, 2);
        assert.equal(name, "Webpack");
        assert.equal(credit, 20);
    });

    it('Correct course React', () => {
        const {courses} = normalizedData.entities;
        const COURSE_REACT = courses["3"]
        const {id, name, credit} = COURSE_REACT;

        assert.equal(id, 3);
        assert.equal(name, "React");
        assert.equal(credit, 40);
    });
});