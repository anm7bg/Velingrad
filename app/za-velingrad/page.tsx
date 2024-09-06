import Link from 'next/link';
import { blogCard } from '@/app/lib/interface';


// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { getZaVelingrad } from '@/lib/service';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { blogCard2 } from '@/lib/interface'; 
import SideNav from '@/components/side-nav';

const ZaVelingradPage = async () => {
	const posts2: blogCard2[] = await getZaVelingrad();

	// console.log("Posts2")
	// console.log(posts2)

	return (
        // <p>Loading</p>
        <div className='leftRightWrap'>
            <div className="blog-page">
                <h2 className="center blue">Категория: За Велинград.</h2>
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
                <p>Категория За Велиинград предоставя полезна информация и забележителности за Велиинград – перлата на Родопите и СПА столицата на Балканите. Открийте най-добрите места за настаняване, минерални извори, културни и природни забележителности, както и разнообразни възможности за релакс и активна почивка. Възползвайте се от нашите съвети за пътуване и направете престоя си във Велиинград незабравим!</p>
            </div>
            <SideNav />
        </div>
	);
};

export default ZaVelingradPage;