import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only 1 param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const exptected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            exptected
        );
    });

    test('with mods', () => {
        const exptected = 'someClass class1 class2 hovered selected';
        expect(
            classNames('someClass', { hovered: true, selected: true }, [
                'class1',
                'class2',
            ])
        ).toBe(exptected);
    });

    test('with mods false', () => {
        const exptected = 'someClass class1 class2 selected';
        expect(
            classNames('someClass', { hovered: false, selected: true }, [
                'class1',
                'class2',
            ])
        ).toBe(exptected);
    });

    test('with mods undefined', () => {
        const exptected = 'someClass class1 class2';
        expect(
            classNames('someClass', { hovered: false, selected: undefined }, [
                'class1',
                'class2',
            ])
        ).toBe(exptected);
    });
});
