import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText, Database, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import vmlLogo from '@/assets/vml-logo.png';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-card">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img src={vmlLogo} alt="VML India" className="h-12 w-auto" />
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: January 2024
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 mb-8 shadow-card">
          <p className="text-muted-foreground leading-relaxed">
            At VML India, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
            logistics services and visit our website.
          </p>
        </Card>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Information Collection */}
          <Card className="p-8 shadow-card hover:shadow-hover transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We collect information that you provide directly to us, including name, email address, phone number, 
                      company details, shipping addresses, and payment information when you request quotes or use our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Shipment Information</h3>
                    <p className="leading-relaxed">
                      Details about your cargo including weight, dimensions, origin, destination, and tracking information 
                      necessary to provide logistics services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Technical Information</h3>
                    <p className="leading-relaxed">
                      We automatically collect certain information when you visit our website, including IP address, browser type, 
                      device information, and usage data through cookies and similar technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* How We Use Information */}
          <Card className="p-8 shadow-card hover:shadow-hover transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>To provide, maintain, and improve our logistics services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>To process transactions and send related information including confirmations and invoices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>To send you technical notices, updates, security alerts, and support messages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>To respond to your comments, questions, and customer service requests</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>To communicate with you about services, offers, and events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>To monitor and analyze trends, usage, and activities in connection with our services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>To comply with legal obligations and protect our rights and interests</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Information Sharing */}
          <Card className="p-8 shadow-card hover:shadow-hover transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Service Providers:</strong> With third-party vendors, carriers, and service providers who perform services on our behalf</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Business Partners:</strong> With shipping carriers, customs agents, and warehouse operators to facilitate logistics services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law or to respond to legal process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Data Security */}
          <Card className="p-8 shadow-card hover:shadow-hover transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, 
                  access controls, and regular security assessments. However, no method of transmission over the Internet or 
                  electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </Card>

          {/* Your Rights */}
          <Card className="p-8 shadow-card hover:shadow-hover transition-shadow">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-primary/10 rounded-lg p-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights and Choices</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Access:</strong> Request access to your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Correction:</strong> Request correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Opt-out:</strong> Opt-out of marketing communications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Data Portability:</strong> Request a copy of your data in a structured format</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-primary/5 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Email:</strong> privacy@vmlindia.com</p>
              <p><strong className="text-foreground">Phone:</strong> +91 (XXX) XXX-XXXX</p>
              <p><strong className="text-foreground">Address:</strong> VML India, Logistics Avenue, India</p>
            </div>
          </Card>

          {/* Changes to Policy */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link to="/">
            <Button size="lg" className="bg-gradient-hero hover:bg-primary-hover transition-all duration-300 shadow-primary">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
