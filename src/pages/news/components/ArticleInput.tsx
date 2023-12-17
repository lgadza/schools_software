
// export default ArticleInput;
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, FormControl } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ArticleInput: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      introduction: '',
      bodyContent: '',
      imageUrl: '',
      author: '',
      publicationDate: new Date(),
      sources: [] as string[],
      conclusion: '',
      keywords: [] as string[],
      metaDescription: '',
      contactInfo: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      introduction: Yup.string().required('Introduction is required'),
      bodyContent: Yup.string().required('Body content is required'),
      imageUrl: Yup.string().url('Invalid URL format'),
      author: Yup.string().required('Author is required'),
      publicationDate: Yup.date().required('Publication Date is required'),
      sources: Yup.array().of(Yup.string()),
      conclusion: Yup.string(),
      keywords: Yup.array().of(Yup.string()),
      metaDescription: Yup.string().required('Meta description is required'),
      contactInfo: Yup.string().required('Contact info is required'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      // API call here
      console.log(values);
      setLoading(false);
    },
  });

  return (
    <Container className='my-5'>
      <h4 className='d-flex my-3 color-header textMediumSize'>Article Edit</h4>
      <Form onSubmit={formik.handleSubmit} className='mt-3'>
        <Row className='mb-3'>
          <Col md={6}>
            <Form.Group>
            <Form.Label className='textSmallSize d-flex'>Title</Form.Label>
              <FormControl
                type="text"
                placeholder="Title"
                name="title"
                className='py-3 rounded-0'
                value={formik.values.title}
                onChange={formik.handleChange}
                isInvalid={formik.touched.title && !!formik.errors.title}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.title}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
            <Form.Label className='textSmallSize d-flex'>Author</Form.Label>
              <FormControl
                type="text"
                placeholder="Author"
                name="author"
                className='py-3 rounded-0'
                value={formik.values.author}
                onChange={formik.handleChange}
                isInvalid={formik.touched.author && !!formik.errors.author}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.author}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col md={6}>
            <Form.Group>
            <Form.Label className='d-flex textSmallSize'>Introduction</Form.Label>
              <FormControl
                className="rounded-0 border border-secondary"
                as="textarea"
                placeholder="Introduction"
                name="introduction"
                value={formik.values.introduction}
                onChange={formik.handleChange}
                isInvalid={formik.touched.introduction && !!formik.errors.introduction}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.introduction}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className='d-flex textSmallSize'>Body Content</Form.Label>
              <ReactQuill
                theme="snow"
                className='content_bg text-dark'
                value={formik.values.bodyContent}
                onChange={(value) => formik.setFieldValue('bodyContent', value)}
              />
              {formik.touched.bodyContent && formik.errors.bodyContent && (
                <div className="text-danger">{formik.errors.bodyContent}</div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col md={6}>
            <Form.Group>
            <Form.Label className='me-3 textSmallSize d-flex'>Image Url</Form.Label>
              <FormControl
                type="url"
                className='py-3 rounded-0'
                placeholder="Image URL"
                name="imageUrl"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                isInvalid={formik.touched.imageUrl && !!formik.errors.imageUrl}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.imageUrl}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group >
              <Form.Label className='me-3 textSmallSize d-flex'>Publication Date</Form.Label>
              <DatePicker
              className="py-3 rounded-0 border border-secondary px-2 w-100"
                selected={formik.values.publicationDate}
                onChange={(date:any) => formik.setFieldValue('publicationDate', date)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3'>
        <Col md={6}>
            <Form.Group>
              <Form.Label className='textSmallSize d-flex'>Sources</Form.Label>
              <TagsInput
                value={formik.values.sources}
                onChange={(sources: string[]) => formik.setFieldValue('sources', sources)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className='textSmallSize d-flex'>Conclusion</Form.Label>
              <FormControl
              className="rounded-0 border border-secondary"
                as="textarea"
                placeholder="Conclusion"
                name="conclusion"
                value={formik.values.conclusion}
                onChange={formik.handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3'>
        <Col md={6}>
            <Form.Group>
              <Form.Label className='textSmallSize d-flex'>Keywords</Form.Label>
              <TagsInput
                value={formik.values.keywords}
                onChange={(keywords: string[]) => formik.setFieldValue('keywords', keywords)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className='textSmallSize d-flex'>Meta Description</Form.Label>
              <FormControl
              className="rounded-0 border border-secondary"
                as="textarea"
                placeholder="Meta Description"
                name="metaDescription"
                value={formik.values.metaDescription}
                onChange={formik.handleChange}
                isInvalid={formik.touched.metaDescription && !!formik.errors.metaDescription}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.metaDescription}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col md={6}>
            <Form.Group>
              <Form.Label className='textSmallSize d-flex'>Contact Info</Form.Label>
              <FormControl
              className="rounded-0 border border-secondary"
                as="textarea"
                placeholder="Contact Info"
                name="contactInfo"
                value={formik.values.contactInfo}
                onChange={formik.handleChange}
                isInvalid={formik.touched.contactInfo && !!formik.errors.contactInfo}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.contactInfo}</Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
        <Col md={6} >
            <div className='content_bg-2 d-flex justify-content-center  text-center'>
        <Button type="submit" className='w-100'  disabled={loading}>
          {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Submit'}
        </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ArticleInput;
