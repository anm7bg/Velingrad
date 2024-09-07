import Link from 'next/link';
import { blogCard } from '@/app/lib/interface';


// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { getVelingradHoteli, getZaVelingrad } from '@/lib/service';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { blogCard2 } from '@/lib/interface'; 
import SideNav from '@/components/side-nav';

const ZaVelingradPage = async () => {
	const posts2: blogCard2[] = await getVelingradHoteli();

	// console.log("Posts2")
	// console.log(posts2)

	return (
        // <p>Loading</p>
        <div className='leftRightWrap'>
            <div className="blog-page">
                <h2 className="center blue">Категория: Велинград хотели.</h2>
                <div className="posts">
                    {posts2.map((post: any, idx: number) => {
                        // console.log("Post")
                        // console.log(post)
                        return (
                            <Card className='mb-[20px]' key={idx}>
                                <Image 
                                    src={post.featuredImage.node.sourceUrl} 
                                    alt="image" 
                                    width={600} 
                                    height={400}
                                    className='rounded-t-lg object-cover'
                                />
                                <CardHeader className='py-[5px] my-[5px] blog-card-head'>
                                    <h3 className='text-center text-lg line-clamp-2'>{post.title}</h3>
                                </CardHeader>
                                <CardBody className='p-[5px]'>
                                    <p className='line-clamp-2 text-sm'>{post.shortDesc}</p>
                                </CardBody>
                                <CardFooter>
                                    <Button className='w-full mt7'>
                                        <Link href={`${post.slug}`}>Виж</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
                <p>Категорията Велинград хотели включва подбрани предложения за комфортно настаняване в известния СПА курорт Велинград. Независимо дали търсите луксозен хотел с минерални басейни, семеен хотел в близост до природата или място за романтичен уикенд, тук ще откриете разнообразие от възможности, подходящи за всеки вкус и бюджет. Насладете се на релаксираща почивка с уникални СПА процедури, чист въздух и красива природа в сърцето на Родопите. Изберете перфектния хотел във Велинград и се погрижете за вашето здраве и комфорт.</p>
            </div>
            <SideNav />
        </div>
	);
};

export default ZaVelingradPage;