import Container from "../../components/shared/container";
import TextCard from "../../components/shared/text-card";

const AboutPage = () => {
  return (
    <div>
      <Container className="mt-10 mb-[100px] space-y-6">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">Heading</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea iusto,
            laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam, non in
            itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam
            ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
            non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus
            aliquam ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore
            nam, non in itaque iste!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea iusto,
            laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam, non in
            itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam
            ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
            non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus
            aliquam ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore
            nam, non in itaque iste!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea iusto,
            laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam, non in
            itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam
            ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
            non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus
            aliquam ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore
            nam, non in itaque iste!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea iusto,
            laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam, non in
            itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam
            ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
            non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus
            aliquam ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore
            nam, non in itaque iste!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <article>
              <h2 className="text-2xl font-semibold mb-5">Who we are</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
                non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum
                repellendus aliquam ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta
                temporibus eaque dolore nam, non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Dignissimos illum repellendus aliquam ea iusto, laboriosam quos consequuntur corrupti enim
                laborum, eveniet soluta temporibus eaque dolore nam, non in itaque iste!
              </p>
            </article>
          </div>
          <div>
            <article>
              <h2 className="text-2xl font-semibold mb-5">What our vision</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum repellendus aliquam ea
                iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta temporibus eaque dolore nam,
                non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos illum
                repellendus aliquam ea iusto, laboriosam quos consequuntur corrupti enim laborum, eveniet soluta
                temporibus eaque dolore nam, non in itaque iste! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Dignissimos illum repellendus aliquam ea iusto, laboriosam quos consequuntur corrupti enim
                laborum, eveniet soluta temporibus eaque dolore nam, non in itaque iste!
              </p>
            </article>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-2xl font-semibold my-5 text-center">Why us</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <TextCard key={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
