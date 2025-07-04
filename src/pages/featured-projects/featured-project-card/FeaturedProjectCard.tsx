import { FC } from "react";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Tags } from "shared/tags/Tags";
import { ProjectCardFooter } from "shared/project-card-footer/ProjectCardFooter";

export enum ImagePosition {
    Right,
    Left,
}
interface Props {
    id: string;
    title: string;
    year: string;
    github?: string;
    report?: string;
    tags: string[];
    description: string;
    description2: string;
    readMore?: string;
    image: string;
    imagePosition: ImagePosition;
    jpg: string;
}

const ImagePositionLayoutMapper: Record<ImagePosition, "row" | "row-reverse"> = {
    [ImagePosition.Right]: "row",
    [ImagePosition.Left]: "row-reverse",
};

const ImagePositionPaddingRightMapper: Record<ImagePosition, string> = {
    [ImagePosition.Right]: "8",
    [ImagePosition.Left]: "0",
};

const ImagePositionPaddingLeftMapper: Record<ImagePosition, string> = {
    [ImagePosition.Right]: "0",
    [ImagePosition.Left]: "8",
};

export const FeaturedProjectCard: FC<Props> = ({
    id,
    title,
    github,
    report,
    tags,
    description,
    description2,
    image,
    imagePosition,
    year,
    jpg,
}) => {
    console.log("Rendering image:", image);
    return (
        <Flex
            justifyContent="space-between"
            id="featured-project-card"
            py={{ base: "12", md: "12", lg: '28' }}
            direction={{ base: "column-reverse", lg: ImagePositionLayoutMapper[imagePosition] }}
        >
            <Flex
                h="auto"
                // pr={{ base: "0", lg: ImagePositionPaddingRightMapper[imagePosition] }}
                pl={{ base: "0", lg: ImagePositionPaddingLeftMapper[imagePosition] }}
                direction="column"
                justifyContent="space-between"
                flex={{ base: 1, lg: 0.6 }}
            >
                <Box>
                    <Heading data-aos="fade-down" data-aos-offset="200" fontSize="4xl" lineHeight="1">
                        {title}
                    </Heading>
                    <Text
                        pt="2"
                        fontSize="sm"
                        fontWeight="600"
                        opacity="0.6"
                        data-aos="fade"
                        data-aos-delay="100"
                        data-aos-offset="200"
                    >
                        {year}
                    </Text>

                    <Box
                        py="4"
                        display={{ base: "inherit", lg: "none" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                    >
                        <Image borderRadius="xl" src={image} />
                    </Box>

                    <Text
                        fontSize="lg"
                        pt={{ base: 0, lg: "2" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        borderRadius="xl"
                        pb="2"
                    >
                        {description}
                    </Text>

                    <Text
                        fontSize="lg"
                        pt={{ base: 0, lg: "2" }}
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        borderRadius="xl"
                        pb="2"
                    >
                        {description2}
                    </Text>

                    <Tags tags={tags} id={id} />
                </Box>

                <ProjectCardFooter report={report} github={github}/>
            </Flex>

            <Box
                data-aos="fade-up"
                data-aos-offset="200"
                display={{ base: "none", lg: "block" }}
                flex={{ base: 1, lg: 0.6 }}
              //  pl={{ base: "0", lg: ImagePositionPaddingRightMapper[imagePosition] }}
                pr={{ base: "0", lg: ImagePositionPaddingLeftMapper[imagePosition] }}
            >
            <picture>
              <source srcSet={image} type="image/webp" />
              <source srcSet={jpg} type="image/jpeg" />
              <img
                src={jpg || image}
                alt={title}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  objectFit: 'cover',
                    }}
                />
            </picture>


            </Box>
        </Flex>
    );
};
