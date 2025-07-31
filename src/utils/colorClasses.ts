export function getTextColorClass(color: string): string {
    return {
        black: 'text-black',
        sky: 'text-sky-700',
        blue: 'text-blue-500',
        cyan: 'text-cyan-600',
        emerald: 'text-emerald-700',
        slate: 'text-slate-500',
        teal: 'text-teal-500',
        gray: 'text-gray-500'
    }[color] ?? 'text-black'
}