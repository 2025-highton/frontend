import s from './style.module.scss';

export default function FandomSectionTitle({children}: {children: React.ReactNode}) {
    return (
        <h1 className={s.title}>{children}</h1>
    )
}