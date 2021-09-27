import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');

function coursesNormalizer(data) {
    return normalize(data, [courses]);
}

export {coursesNormalizer};
