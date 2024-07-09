import { classNames } from './classNames';

describe('classNames', () => {
    it('with only one param', () => {
        expect(classNames('someclass')).toBe('someclass');
    });

    it('with additional classes', () => {
        const expected = 'someclass class1 class2';

        expect(classNames('someclass', {}, ['class1', 'class2'])).toBe(expected);
    });

    it('with additional classes and mods', () => {
        const expected = 'someclass class1 class2 hovered scrollable';

        expect(classNames(
            'someclass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
