import { notFound } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '@/utils/supabase/server';

interface PolicyPageProps {
    params: Promise<{ page: string }>;
}

// export async function generateStaticParams() {
//     const supabase = await createClient()

//     const { data: allPages } = await supabase
//         .from('pages')
//         .select('order_by')
//         .order('order_by');

//     return allPages?.map((page) => ({
//         page: page.order_by,
//     })) ?? [];
// }

export const revalidate = 3600;

export default async function PolicyPage({ params }: PolicyPageProps) {
    const { page } = await params;

    const locale = 'en';

    const supabase = await createClient();

    const { data: pageData } = await supabase
        .from('pages')
        .select(`
        id,
        order_by,
        created_at,
        updated_at,
        page_translations!inner (
            title,
            content
        )
    `)
        .eq('order_by', page)
        .eq('page_translations.locale', locale)
        .limit(1)
        .single();

    console.log(pageData);

    if (!pageData?.id || !pageData?.page_translations.length || !pageData?.page_translations[0].title || !pageData?.page_translations[0].content) {
        notFound();
    }

    const { title, content } = pageData.page_translations[0];

    return (
        <article className="max-w-2xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content || '' }} />
        </article>
    );
}
