import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, BUttonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={BUttonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique error vitae ipsam, facere aspernatur aut optio. Ullam
                harum nulla, a impedit perspiciatis delectus minus velit
                molestiae, dicta rerum eum tempore. Pariatur, debitis suscipit?
                Accusamus excepturi, magni suscipit, quaerat dolores fuga
                architecto esse numquam consequuntur dolor sed quos ex labore!
                Voluptatem!
            </Modal>
        </div>
    );
};
