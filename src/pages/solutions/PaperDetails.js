import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
  VStack,
  HStack,
  Heading,
  Text,
  Badge,
  Button,
  Icon,
  useColorMode,
  useTheme,
  Divider,
  IconButton,
  Avatar,
  Input,
  Spinner,
  Select,
} from '@chakra-ui/react';
import { 
  FiDownload, 
  FiThumbsUp, 
  FiMessageSquare, 
  FiBookmark,
  FiShare2,
  FiUsers,
  FiArrowLeft,
  FiSend,
  FiChevronLeft,
  FiChevronRight,
  FiZoomIn,
  FiZoomOut,
  FiMaximize,
  FiGrid,
  FiRotateCw,
  FiMonitor
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Initialize pdfjs worker
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


// Demo paper data
const paperData = {
  id: "2307.02796",
  title: "VerifAI: Verified Generative AI",
  authors: "Nan Tang, Chenyu Yang, Ju Fan, Lei Cao, Yuyu Luo, Alon Halevy",
  pdfUrl: "/doc/demo.pdf",  // Local PDF path
  relatedDomains: ["Databases", "Computation and Language", "Machine Learning"],
  dateCitation: "2023-07-06",
  abstract: "Generative AI has made significant strides, yet concerns about the accuracy and reliability of its outputs continue to grow. Such inaccuracies can have serious consequences such as inaccurate decision-making, the spread of false information, privacy violations, legal liabilities, and more. Although efforts to address these risks are underway, including explainable AI and responsible AI practices such as transparency, privacy protection, bias mitigation, and social and environmental responsibility, misinformation caused by generative AI will remain a significant challenge. We propose that verifying the outputs of generative AI from a data management perspective is an emerging issue for generative AI. This involves analyzing the underlying data from multi-modal data lakes, including text files, tables, and knowledge graphs, and assessing its quality and consistency. By doing so, we can establish a stronger foundation for evaluating the outputs of generative AI models. Such an approach can ensure the correctness of generative AI, promote transparency, and enable decision-making with greater confidence. Our vision is to promote the development of verifiable generative AI and contribute to a more trustworthy and responsible use of AI.",
  ratings: {
    count: 128,
    score: 4.9
  },
  relatedWorks: [
    "Explainable AI: A Comprehensive Review",
    "Responsible AI: Principles and Practices",
    "Data Quality in AI Systems",
    "Multi-modal Data Lakes: Management and Verification"
  ],
  reviews: [
    {
      title: "Important and Timely Research",
      author: "Dr. Zhang",
      supported: true,
      content: "This paper addresses a critical challenge in generative AI - the verification of outputs. The proposed data management perspective offers a practical approach to ensuring AI reliability."
    },
    {
      title: "Comprehensive Framework",
      author: "Prof. Anderson",
      supported: true,
      content: "The authors present a well-structured framework for verifying generative AI outputs. The multi-modal approach considering text, tables, and knowledge graphs is particularly valuable."
    },
    {
      title: "Implementation Challenges",
      author: "Dr. Kumar",
      supported: false,
      content: "While the theoretical framework is sound, the paper could benefit from more discussion on practical implementation challenges and specific verification methodologies."
    }
  ],
  comments: [
    {
      author: "Sarah Chen",
      avatar: "https://bit.ly/sarah-chen",
      content: "The focus on data management for AI verification is innovative and much needed.",
      timestamp: "3 hours ago"
    },
    {
      author: "Michael Brown",
      avatar: "https://bit.ly/michael-brown",
      content: "Great insights on how to approach AI reliability from a data perspective.",
      timestamp: "6 hours ago"
    }
  ],
  metadata: {
    version: "v2",
    lastRevised: "2023-10-11",
    citations: 42,
    pageCount: 8,
    figures: 4
  }
};

function PaperDetails() {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const navigate = useNavigate();
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [scale, setScale] = React.useState(1.0);
  const [pdfError, setPdfError] = React.useState(null);
  const [showThumbnails, setShowThumbnails] = React.useState(false);
  const containerRef = React.useRef(null);
  const [rotation, setRotation] = React.useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfError(null);
    console.log('PDF loaded successfully');
  };

  const onDocumentLoadError = (error) => {
    console.error('Error loading PDF:', error);
    setPdfError(error);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const goToPage = (page) => {
    setPageNumber(page);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const zoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 0.1, 2.0));
  };

  const zoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 0.1, 0.5));
  };

  const setZoomLevel = (level) => {
    setScale(level);
  };

  const fitToWidth = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const newScale = (containerWidth - 48) / (window.innerWidth * 0.5); // 48px for padding
      setScale(newScale);
    }
  };

  const rotateClockwise = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // Thumbnail component
  const Thumbnail = ({ pageNumber: thumbPageNumber }) => (
    <Box
      onClick={() => goToPage(thumbPageNumber)}
      cursor="pointer"
      borderWidth="1px"
      borderRadius="md"
      borderColor={thumbPageNumber === pageNumber ? 'blue.500' : 'gray.200'}
      p={2}
      _hover={{ borderColor: 'blue.300' }}
    >
      <Document file="/doc/demo.pdf">
        <Page
          pageNumber={thumbPageNumber}
          width={100}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <Text fontSize="xs" textAlign="center" mt={1}>
        Page {thumbPageNumber}
      </Text>
    </Box>
  );

  return (
    <Container maxW="container.xl" py={8}>
      {/* Back Button */}
      <Button
        leftIcon={<FiArrowLeft />}
        mb={6}
        onClick={() => navigate('/browse')}
        variant="ghost"
      >
        Back to Papers
      </Button>

      <Grid templateColumns={{ base: "1fr", lg: showThumbnails ? "100px 2fr 1fr" : "2fr 1fr" }} gap={8}>
        {/* Thumbnails */}
        {showThumbnails && (
          <GridItem>
            <VStack spacing={4} maxH="800px" overflowY="auto">
              {Array.from(new Array(numPages), (el, index) => (
                <Thumbnail key={index + 1} pageNumber={index + 1} />
              ))}
            </VStack>
          </GridItem>
        )}

        {/* Left Column - Paper Preview and Details */}
        <GridItem ref={containerRef}>
          {/* Paper Preview */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            mb={6}
          >
            {/* PDF Controls */}
            {numPages && (
              <HStack 
                p={2} 
                borderBottomWidth="1px" 
                spacing={2} 
                justify="space-between"
                bg={colorMode === 'light' ? 'gray.50' : 'gray.800'}
              >
                {/* Left Controls */}
                <HStack spacing={2}>
                  <IconButton
                    icon={<FiGrid />}
                    aria-label={showThumbnails ? "Hide Thumbnails" : "Show Thumbnails"}
                    size="sm"
                    onClick={() => setShowThumbnails(!showThumbnails)}
                    variant={showThumbnails ? "solid" : "ghost"}
                    colorScheme="blue"
                  />
                  <Divider orientation="vertical" h="20px" />
                  <IconButton
                    icon={<FiZoomOut />}
                    aria-label="Zoom Out"
                    size="sm"
                    onClick={zoomOut}
                  />
                  <Select
                    size="sm"
                    width="100px"
                    value={scale}
                    onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
                  >
                    <option value={0.5}>50%</option>
                    <option value={0.75}>75%</option>
                    <option value={1}>100%</option>
                    <option value={1.25}>125%</option>
                    <option value={1.5}>150%</option>
                    <option value={2}>200%</option>
                  </Select>
                  <IconButton
                    icon={<FiZoomIn />}
                    aria-label="Zoom In"
                    size="sm"
                    onClick={zoomIn}
                  />
                  <IconButton
                    icon={<FiMonitor />}
                    aria-label="Fit to Width"
                    size="sm"
                    onClick={fitToWidth}
                  />
                  <IconButton
                    icon={<FiRotateCw />}
                    aria-label="Rotate Clockwise"
                    size="sm"
                    onClick={rotateClockwise}
                  />
                </HStack>

                {/* Center - Page Navigation */}
                <HStack spacing={2}>
                  <IconButton
                    icon={<FiChevronLeft />}
                    aria-label="Previous Page"
                    size="sm"
                    onClick={previousPage}
                    isDisabled={pageNumber <= 1}
                  />
                  <Text fontSize="sm" minW="80px" textAlign="center">
                    {pageNumber} / {numPages}
                  </Text>
                  <IconButton
                    icon={<FiChevronRight />}
                    aria-label="Next Page"
                    size="sm"
                    onClick={nextPage}
                    isDisabled={pageNumber >= numPages}
                  />
                </HStack>

                {/* Right Controls */}
                <HStack spacing={2}>
                  <IconButton
                    icon={<FiDownload />}
                    aria-label="Download PDF"
                    size="sm"
                    onClick={() => window.open('/doc/demo.pdf', '_blank')}
                  />
                  <IconButton
                    icon={<FiMaximize />}
                    aria-label="Full Screen"
                    size="sm"
                    onClick={() => document.documentElement.requestFullscreen()}
                  />
                </HStack>
              </HStack>
            )}

            <Document
              file="/doc/demo.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <Box p={8} textAlign="center">
                  <Spinner size="xl" color="blue.500" mb={4} />
                  <Text fontSize="lg">Loading PDF...</Text>
                  <Text fontSize="sm" color="gray.500" mt={2}>
                    Loading from: /doc/demo.pdf
                  </Text>
                </Box>
              }
              error={
                <Box p={8} textAlign="center">
                  <Text color="red.500" fontSize="lg" mb={2}>Error loading PDF</Text>
                  <Text fontSize="sm" color="gray.500" maxW="md" mx="auto" mb={4}>
                    {pdfError ? `Error: ${pdfError.message}` : 'The PDF file could not be loaded. Please try downloading it instead.'}
                  </Text>
                  <VStack spacing={4}>
                    <Button
                      colorScheme="blue"
                      leftIcon={<FiDownload />}
                      onClick={() => window.open('/doc/demo.pdf', '_blank')}
                    >
                      Download PDF
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => window.location.reload()}
                    >
                      Try Again
                    </Button>
                  </VStack>
                </Box>
              }
            >
              <Page
                pageNumber={pageNumber}
                width={window.innerWidth * 0.5}
                scale={scale}
                rotate={rotation}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                error={
                  <Text color="red.500">
                    Error loading this page. Please try a different page.
                  </Text>
                }
              />
            </Document>
          </Box>

          {/* Related Works */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            mb={6}
          >
            <Heading size="md" mb={4}>Related Works Mentioned</Heading>
            <VStack align="stretch" spacing={3}>
              {paperData.relatedWorks.map((work, index) => (
                <HStack key={index} justify="space-between">
                  <Text>{work}</Text>
                  <Button size="sm" variant="ghost" rightIcon={<FiShare2 />}>
                    View
                  </Button>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* Reviews */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
          >
            <Heading size="md" mb={4}>Reviews</Heading>
            <VStack align="stretch" spacing={4}>
              {paperData.reviews.map((review, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                >
                  <Grid templateColumns="1fr auto" gap={4} mb={2}>
                    <Heading size="sm">{review.title}</Heading>
                    <Badge colorScheme={review.supported ? 'green' : 'red'}>
                      {review.supported ? 'Supported' : 'Not Supported'}
                    </Badge>
                  </Grid>
                  <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.400'} mb={2}>
                    by {review.author}
                  </Text>
                  <Text>{review.content}</Text>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Comments */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            bg={colorMode === 'light' ? 'white' : 'gray.700'}
            mt={6}
          >
            <Heading size="md" mb={4}>Comments</Heading>
            <VStack align="stretch" spacing={4}>
              {paperData.comments.map((comment, index) => (
                <Box
                  key={index}
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                >
                  <HStack spacing={3} mb={2}>
                    <Avatar size="sm" src={comment.avatar} name={comment.author} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">{comment.author}</Text>
                      <Text fontSize="sm" color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                        {comment.timestamp}
                      </Text>
                    </VStack>
                  </HStack>
                  <Text>{comment.content}</Text>
                </Box>
              ))}
              
              {/* Add Comment Input */}
              <HStack spacing={2} mt={4}>
                <Input placeholder="Add a comment..." />
                <IconButton
                  icon={<FiSend />}
                  aria-label="Send comment"
                  colorScheme="blue"
                />
              </HStack>
            </VStack>
          </Box>
        </GridItem>

        {/* Right Column - Paper Info */}
        <GridItem>
          <VStack spacing={6} position="sticky" top="100px">
            {/* Title & Authors */}
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={6}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              w="100%"
            >
              <Heading size="md" mb={4}>{paperData.title}</Heading>
              <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                {paperData.authors}
              </Text>
            </Box>

            {/* Related Domains */}
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={6}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              w="100%"
            >
              <Heading size="sm" mb={4}>Related Domains</Heading>
              <HStack spacing={2} wrap="wrap">
                {paperData.relatedDomains.map((domain, index) => (
                  <Badge 
                    key={index}
                    colorScheme="blue"
                    p={2}
                    borderRadius="full"
                  >
                    {domain}
                  </Badge>
                ))}
              </HStack>
            </Box>

            {/* Date & Citation */}
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={6}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              w="100%"
            >
              <HStack justify="space-between" mb={2}>
                <Text>Publication Date:</Text>
                <Text>{paperData.dateCitation}</Text>
              </HStack>
              <HStack justify="space-between">
                <Text>Citations:</Text>
                <Text>128</Text>
              </HStack>
            </Box>

            {/* Ratings */}
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={6}
              bg={colorMode === 'light' ? 'white' : 'gray.700'}
              w="100%"
            >
              <Heading size="sm" mb={4}>Ratings</Heading>
              <HStack justify="space-between">
                <HStack>
                  <Icon as={FiUsers} />
                  <Text>{paperData.ratings.count} ratings</Text>
                </HStack>
                <Badge colorScheme="green" fontSize="lg" p={2}>
                  {paperData.ratings.score}
                </Badge>
              </HStack>
            </Box>

            {/* Action Buttons */}
            <VStack spacing={4} w="100%">
              <Button
                w="100%"
                colorScheme="blue"
                leftIcon={<FiDownload />}
                bgGradient={theme.gradients.button[colorMode]}
                _hover={{ bgGradient: theme.gradients.button[colorMode], opacity: 0.9 }}
              >
                Download PDF
              </Button>
              <HStack w="100%" spacing={4}>
                <Button flex={1} leftIcon={<FiThumbsUp />} variant="outline">
                  Like
                </Button>
                <Button flex={1} leftIcon={<FiMessageSquare />} variant="outline">
                  Comment
                </Button>
                <Button flex={1} leftIcon={<FiBookmark />} variant="outline">
                  Save
                </Button>
              </HStack>
            </VStack>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default PaperDetails; 