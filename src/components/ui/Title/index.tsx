import s from './style.module.scss';

export default function Title({ children }: { children: string }) {
    return (
        <h1 className={s.title}>{children}</h1>
    )
}