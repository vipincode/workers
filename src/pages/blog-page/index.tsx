import BlogCard from "../../components/blog/blog-card";
import CommentForm from "../../components/shared/comment-form";
import Container from "../../components/shared/container";
import SmallBanner from "../../components/shared/small-banner";

const BlogPage = () => {
  return (
    <div>
      <SmallBanner
        title="Noteworthy technology acquisitions 2021"
        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
      />
      <Container className="my-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="blog-content col-span-8">
            <div>
              <h2>Heading 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat enim eu mauris condimentum, sit
                amet mattis sapien euismod. Nullam eu sapien dolor. Cras ut varius ex. Vestibulum id varius mauris.
                Donec ut nunc est. Integer gravida, magna vitae bibendum mollis, mauris lorem mollis tellus, sed aliquam
                lectus ligula vel lacus. Nunc a nunc molestie, cursus nulla at, suscipit tellus. Sed ut purus id nibh
                laoreet iaculis quis a nibh. Pellentesque sodales luctus risus eget rhoncus. Proin et posuere enim.
                Donec lorem sem, imperdiet et sapien at, tincidunt semper sapien. Aliquam feugiat fringilla quam vitae
                ornare. In lobortis, tellus sed auctor pretium, felis ipsum blandit purus, vitae aliquam ex mauris eget
                metus. Suspendisse tristique lorem at ipsum blandit ultrices. Maecenas ultrices elit vitae urna
                efficitur ullamcorper.
              </p>
              <p>
                Cras at metus ultricies ex lobortis ullamcorper eget nec nibh. Maecenas a metus eros. Aenean eu pulvinar
                arcu. Pellentesque neque purus, vulputate nec pharetra eget, elementum in quam. Donec vel magna at nulla
                sagittis malesuada id et nisi. Suspendisse urna metus, ultrices sit amet risus ac, fermentum aliquam ex.
                Maecenas ac magna dolor.
              </p>
              <p>
                Integer tristique condimentum mauris ut mollis. Integer ante diam, posuere eu velit finibus, facilisis
                euismod leo. Vivamus a dictum odio. Duis pellentesque tellus in dolor consectetur venenatis. Aenean vel
                velit tellus. Vivamus sed lectus ut urna condimentum imperdiet. Sed nec viverra eros, quis consequat
                ante. Fusce sodales orci ac sapien ullamcorper tempor. Integer id accumsan velit. Donec eleifend
                pharetra sodales. Duis posuere eleifend urna, consequat dignissim tortor ornare sed. Cras eu rhoncus
                ligula, id convallis quam. Proin congue nulla et dolor laoreet tempus. Praesent lobortis est metus.
              </p>
              <div className="grid grid-cols-12 gap-6 w-full my-10 items-center">
                <div className="col-span-5">
                  <img src="/images/cutting-1.jpg" className="h-full" alt=" cutting images" />
                </div>
                <article className="col-span-7">
                  <h2>Heading 2</h2>
                  <p>
                    Vestibulum erat tortor, imperdiet commodo egestas eu, fringilla et turpis. Phasellus quis tortor
                    eget magna eleifend imperdiet. Praesent hendrerit ultrices est, sed euismod velit consectetur a.
                    Aliquam lacinia vel orci id commodo. Maecenas sit amet viverra dui. Morbi eget hendrerit sapien, a
                    viverra turpis. Aenean et venenatis sapien. Suspendisse lacinia pretium placerat. Etiam efficitur
                    est non odio fermentum ornare. Praesent sollicitudin purus leo, vel sodales orci tincidunt et.
                  </p>
                </article>
              </div>
              <h2>Heading 3</h2>
              <p>
                Vestibulum erat tortor, imperdiet commodo egestas eu, fringilla et turpis. Phasellus quis tortor eget
                magna eleifend imperdiet. Praesent hendrerit ultrices est, sed euismod velit consectetur a. Aliquam
                lacinia vel orci id commodo. Maecenas sit amet viverra dui. Morbi eget hendrerit sapien, a viverra
                turpis. Aenean et venenatis sapien. Suspendisse lacinia pretium placerat. Etiam efficitur est non odio
                fermentum ornare. Praesent sollicitudin purus leo, vel sodales orci tincidunt et.
              </p>
              <p>
                Suspendisse vitae convallis nisi. Praesent sed risus facilisis, facilisis sem et, posuere orci. Mauris
                sagittis sem dui, eu lobortis magna fermentum sed. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Nulla nulla velit, euismod vel metus non, tempus finibus ex.
                Mauris feugiat tincidunt diam. Donec volutpat porta massa, id facilisis lorem. Maecenas pellentesque
                lacus felis, at rhoncus odio pharetra et. Proin eget ligula arcu. Quisque pretium dolor vitae nunc
                mattis, quis eleifend dui varius. Praesent cursus metus est, ut dapibus est laoreet eget. Quisque in est
                ipsum. Nullam eleifend quis nisi at condimentum. Nullam vel posuere felis, a ornare tortor. Nullam eu
                risus venenatis, blandit nisl in, tempor dolor. Sed cursus lacus nec varius molestie.
              </p>
              <div className="grid grid-cols-12 gap-6 w-full my-10 items-center">
                <article className="col-span-7">
                  <h2>Heading 4</h2>
                  <p>
                    Vestibulum erat tortor, imperdiet commodo egestas eu, fringilla et turpis. Phasellus quis tortor
                    eget magna eleifend imperdiet. Praesent hendrerit ultrices est, sed euismod velit consectetur a.
                    Aliquam lacinia vel orci id commodo. Maecenas sit amet viverra dui. Morbi eget hendrerit sapien, a
                    viverra turpis. Aenean et venenatis sapien. Suspendisse lacinia pretium placerat. Etiam efficitur
                    est non odio fermentum ornare. Praesent sollicitudin purus leo, vel sodales orci tincidunt et.
                  </p>
                </article>
                <div className="col-span-5">
                  <img src="/images/cutting-1.jpg" className="h-full" alt=" cutting images" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Comments</h2>
              <hr />
            </div>
            <div className="mt-10">
              <CommentForm />
            </div>
          </div>
          <div className="col-span-4 space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <BlogCard key={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogPage;
